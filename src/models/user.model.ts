import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

export class User extends Model {
  declare id: number;
  declare email: string;
  declare emailVerified: boolean;
  declare passwordHash: string;
  declare verificationTokenHash: string | null;
  declare verificationTokenExpiresAt: Date | null;
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
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);