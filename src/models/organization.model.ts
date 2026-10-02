import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database.js";

interface OrganizationAttributes {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type OrganizationCreationAttributes = Optional<
  OrganizationAttributes,
  "id" | "createdAt" | "updatedAt"
>;

class Organization
  extends Model<OrganizationAttributes, OrganizationCreationAttributes>
  implements OrganizationAttributes
{
  declare id: number;
  declare name: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Organization.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Organizations",
    timestamps: true,
  },
);

export default Organization;