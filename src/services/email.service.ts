import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: process.env.ETHEREAL_USER,
    pass: process.env.ETHEREAL_PASSWORD,
  },
});

export const sendVerificationEmail = async (
  email: string,
  token: string,
) => {
  const verificationUrl =
    `http://localhost:4000/auth/verify-email?token=${token}`;

  await transporter.sendMail({
    from: '"Invoice Management" <no-reply@example.com>',
    to: email,
    subject: "Verify your email",
    text: `Please verify your email by clicking this link: ${verificationUrl}`,
  });
};

export const sendPasswordResetEmail = async (
    email: string,
    token: string,
  ) => {
    const resetUrl =
      `http://localhost:4000/auth/reset-password?token=${token}`;
  
    await transporter.sendMail({
      from: '"Invoice Management" <no-reply@example.com>',
      to: email,
      subject: "Reset your password",
      text: `Reset your password using this link: ${resetUrl}`,
    });
  };