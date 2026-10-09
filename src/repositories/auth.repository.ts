import { User, RefreshToken, PasswordResetToken, } from "@/models/index.js";
import { Op } from "sequelize";

export const findUserByEmail = async (email: string) => {
  return User.findOne({
    where: {
      email,
    },
  });
};

export const createUser = async (
    email: string,
    passwordHash: string,
    verificationTokenHash: string,
    verificationTokenExpiresAt: Date,
  ) => {
    return User.create({
      email,
      passwordHash,
      emailVerified: false,
      verificationTokenHash,
      verificationTokenExpiresAt,
    });
  };

export const createRefreshToken = async (
    userId: number,
    token: string,
    expiresAt: Date,
  ) => {
    return RefreshToken.create({
      userId,
      token,
      expiresAt,
    });
  };
  
  export const findRefreshToken = async (token: string) => {
    return RefreshToken.findOne({
      where: {
        token,
      },
    });
  };
  
  export const revokeRefreshToken = async (token: string) => {
    return RefreshToken.update(
      {
        revokedAt: new Date(),
      },
      {
        where: {
          token,
        },
      },
    );
  };

  export const revokeAllRefreshTokensByUserId = async (
    userId: number,
  ) => {
    return RefreshToken.update(
      {
        revokedAt: new Date(),
      },
      {
        where: {
          userId,
          revokedAt: null,
        },
      },
    );
  };

  export const findUserByVerificationToken = async (
    tokenHash: string,
  ) => {
    return User.findOne({
      where: {
        verificationTokenHash: tokenHash,
      },
    });
  };
  
  export const verifyUserEmail = async (userId: number) => {
    return User.update(
      {
        emailVerified: true,
        verificationTokenHash: null,
        verificationTokenExpiresAt: null,
      },
      {
        where: {
          id: userId,
        },
      },
    );
  };

  export const createPasswordResetToken = async (
    userId: number,
    tokenHash: string,
    expiresAt: Date,
  ) => {
    return PasswordResetToken.create({
      userId,
      tokenHash,
      expiresAt,
    });
  };
  
  export const findPasswordResetToken = async (
    tokenHash: string,
  ) => {
    return PasswordResetToken.findOne({
      where: {
        tokenHash,
      },
    });
  };
  
  export const markPasswordResetTokenAsUsed = async (
    tokenId: number,
  ) => {
    return PasswordResetToken.update(
      {
        usedAt: new Date(),
      },
      {
        where: {
          id: tokenId,
        },
      },
    );
  };

  export const updateUserPassword = async (
    userId: number,
    passwordHash: string,
  ) => {
    return User.update(
      {
        passwordHash,
      },
      {
        where: {
          id: userId,
        },
      },
    );
  };

  export const findActiveSessionsByUserId = async (
    userId: number,
  ) => {
    return RefreshToken.findAll({
      where: {
        userId,
        revokedAt: null,
        expiresAt: {
          [Op.gt]: new Date(),
        },
      },
      attributes: ["id", "createdAt", "expiresAt"],
      order: [["createdAt", "DESC"]],
    });
  };