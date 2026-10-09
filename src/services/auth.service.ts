import bcrypt from "bcrypt";
import {
    createUser,
    findUserByEmail,
    createRefreshToken,
    findRefreshToken,
    revokeRefreshToken,
    revokeAllRefreshTokensByUserId,
    findUserByVerificationToken,
    verifyUserEmail,
    createPasswordResetToken,
    updateUserPassword,
    findPasswordResetToken,
    markPasswordResetTokenAsUsed,
    findActiveSessionsByUserId,
  } from "@/repositories/auth.repository.js";
import { generateAccessToken } from "@/utils/jwt.js";
import { generateRefreshToken } from "@/utils/refresh-token.js";
import { generateToken } from "@/utils/token.js";
import { sendVerificationEmail, sendPasswordResetEmail } from "@/services/email.service.js";
import crypto from "crypto";

export const registerUser = async (
    email: string,
    password: string,
  ) => {
    const existingUser = await findUserByEmail(email);
  
    if (existingUser) {
      throw new Error("Email already exists");
    }
  
    const passwordHash = await bcrypt.hash(password, 10);
  
    const { token, tokenHash } = generateToken();

    console.log("Verification token:", token);
  
    const verificationTokenExpiresAt = new Date(
      Date.now() + 60 * 60 * 1000,
    );
  
    const user = await createUser(
      email,
      passwordHash,
      tokenHash,
      verificationTokenExpiresAt,
    );
  
    await sendVerificationEmail(email, token);

    return {
      user,
    };
  };

// Salt, cost factor

export const loginUser = async (
    email: string,
    password: string,
  ) => {
    const user = await findUserByEmail(email);
  
    if (!user) {
      throw new Error("Invalid email or password");
    }
  
    const isPasswordValid = await bcrypt.compare(
      password,
      user.passwordHash,
    );
  
    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }
  
    const accessToken = generateAccessToken(user.id);

    const refreshToken = generateRefreshToken();

const expiresAt = new Date(
  Date.now() + 7 * 24 * 60 * 60 * 1000,
);

await createRefreshToken(
  user.id,
  refreshToken,
  expiresAt,
);
  

    return {
      user,
      accessToken,
      refreshToken,
      
    };
  };

  export const refreshAccessToken = async (
    refreshToken: string,
  ) => {
    const storedToken = await findRefreshToken(refreshToken);
  
    if (!storedToken) {
      throw new Error("Invalid refresh token");
    }
  
    if (storedToken.revokedAt) {
        await revokeAllRefreshTokensByUserId(
          storedToken.userId,
        );
      
        throw new Error("Refresh token reuse detected");
      }
  
    if (storedToken.expiresAt < new Date()) {
      throw new Error("Refresh token has expired");
    }
  
    // Revoke the old refresh token
    await revokeRefreshToken(refreshToken);
  
    // Create a new refresh token
    const newRefreshToken = generateRefreshToken();
  
    const expiresAt = new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000,
    );
  
    await createRefreshToken(
      storedToken.userId,
      newRefreshToken,
      expiresAt,
    );
  
    const accessToken = generateAccessToken(
        storedToken.userId,
      );
      
      return {
        accessToken,
        refreshToken: newRefreshToken,
        
      };
  };

  export const logoutUser = async (refreshToken: string) => {
    await revokeRefreshToken(refreshToken);
  };


  export const logoutAllDevices = async (userId: number) => {
    await revokeAllRefreshTokensByUserId(userId);
  
    return {
      message: "Logged out from all devices successfully",
    };
  };

  export const verifyEmail = async (token: string) => {
    const tokenHash = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");
  
    const user = await findUserByVerificationToken(tokenHash);
  
    if (!user) {
      throw new Error("Invalid verification token");
    }
  
    if (
      !user.verificationTokenExpiresAt ||
      user.verificationTokenExpiresAt < new Date()
    ) {
      throw new Error("Verification token has expired");
    }
  
    await verifyUserEmail(user.id);
  
    return {
      message: "Email verified successfully",
    };
  };

  export const forgotPassword = async (email: string) => {
    const user = await findUserByEmail(email);
  
    if (!user) {
      return {
        message: "If the email exists, a password reset link has been sent",
      };
    }
  
    const { token, tokenHash } = generateToken();
  
    const expiresAt = new Date(
      Date.now() + 15 * 60 * 1000,
    );
  
    await createPasswordResetToken(
      user.id,
      tokenHash,
      expiresAt,
    );
  
    await sendPasswordResetEmail(user.email, token);
  
    return {
      message: "If the email exists, a password reset link has been sent",
    };
  };


  export const resetPassword = async (
    token: string,
    newPassword: string,
  ) => {
    const tokenHash = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");
  
    const resetToken = await findPasswordResetToken(tokenHash);
  
    if (!resetToken) {
      throw new Error("Invalid password reset token");
    }
  
    if (resetToken.usedAt) {
      throw new Error("Password reset token has already been used");
    }
  
    if (resetToken.expiresAt < new Date()) {
      throw new Error("Password reset token has expired");
    }
  
    const passwordHash = await bcrypt.hash(newPassword, 10);
  
    await updateUserPassword(
      resetToken.userId,
      passwordHash,
    );
  
    await markPasswordResetTokenAsUsed(resetToken.id);
  
    return {
      message: "Password reset successfully",
    };
  };


export const getActiveSessions = async (userId: number) => {
    return findActiveSessionsByUserId(userId);
  };