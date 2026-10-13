
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database.js";

interface PermissionAttributes {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type PermissionCreationAttributes = Optional<
  PermissionAttributes,
  "id" | "createdAt" | "updatedAt"
>;

class Permission
  extends Model<PermissionAttributes, PermissionCreationAttributes>
  implements PermissionAttributes
{
  declare id: number;
  declare name: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Permission.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "Permissions",
    timestamps: true,
  },
);

export default Permission;