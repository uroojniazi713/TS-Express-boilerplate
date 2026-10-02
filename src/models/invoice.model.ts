import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database.js";

interface InvoiceAttributes {
  id: number;
  organizationId: number;
  customerId: number;
  status: "draft" | "sent" | "paid" | "cancelled";
  createdAt?: Date;
  updatedAt?: Date;
}

type InvoiceCreationAttributes = Optional<
  InvoiceAttributes,
  "id" | "createdAt" | "updatedAt"
>;

class Invoice
  extends Model<InvoiceAttributes, InvoiceCreationAttributes>
  implements InvoiceAttributes
{
  declare id: number;
  declare organizationId: number;
  declare customerId: number;
  declare status: "draft" | "sent" | "paid" | "cancelled";
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Invoice.init(
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

    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("draft", "sent", "paid", "cancelled"),
      allowNull: false,
      defaultValue: "draft",
    },
  },
  {
    sequelize,
    tableName: "Invoices",
    timestamps: true,
  
    scopes: {
      paid: {
        where: {
          status: "paid",
        },
      },
  
      sent: {
        where: {
          status: "sent",
        },
      },
    },
  },
);

export default Invoice;