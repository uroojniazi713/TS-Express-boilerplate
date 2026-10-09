import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

export class RefreshToken extends Model {
  declare id: number;
  declare userId: number;
  declare token: string;
  declare expiresAt: Date;
  declare revokedAt: Date | null;
}

RefreshToken.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    revokedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "refresh_tokens",
    timestamps: true,
  },
);