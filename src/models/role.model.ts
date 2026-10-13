
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database.js";
import type Permission from "./permission.model.js";

interface RoleAttributes {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type RoleCreationAttributes = Optional<
  RoleAttributes,
  "id" | "createdAt" | "updatedAt"
>;

class Role
  extends Model<RoleAttributes, RoleCreationAttributes>
  implements RoleAttributes
{
  declare id: number;
  declare name: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
  declare setPermissions: (permissions: Permission[]) => Promise<void>;
  declare permissions?: Permission[];
}

Role.init(
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
    tableName: "Roles",
    timestamps: true,
  },
);

export default Role;