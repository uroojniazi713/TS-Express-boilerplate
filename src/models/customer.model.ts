import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database.js";

interface CustomerAttributes {
  id: number;
  organizationId: number;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type CustomerCreationAttributes = Optional<
CustomerAttributes,
"id" | "createdAt" | "updatedAt"
>; 



class Customer
  extends Model<CustomerAttributes, CustomerCreationAttributes>
  implements CustomerAttributes
{
  declare id: number;
  declare organizationId: number;
  declare name: string;
  declare email: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Customers",
    timestamps: true,
    indexes: [
        {
          unique: true,
          fields: ["email"],
        },
        {
          fields: ["organizationId"],
        },
      ],
    hooks: {
      beforeCreate: (customer) => {
        customer.email = customer.email.toLowerCase();
      },
    },
  },
  
);

export default Customer;