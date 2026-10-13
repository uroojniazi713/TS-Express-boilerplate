import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";
import type Role from "./role.model.js";

export class User extends Model {
  declare id: number;
  declare email: string;
  declare emailVerified: boolean;
  declare passwordHash: string;
  declare verificationTokenHash: string | null;
  declare verificationTokenExpiresAt: Date | null;
  declare roleId: number | null;
  declare role?: Role | null;
  declare organizationId: number | null;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    emailVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      verificationTokenHash: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  
      verificationTokenExpiresAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);