import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database.js";

interface InvoiceItemAttributes {
  id: number;
  invoiceId: number;
  productId: number;
  quantity: number;
  unitPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}

type InvoiceItemCreationAttributes = Optional<
  InvoiceItemAttributes,
  "id" | "createdAt" | "updatedAt"
>;

class InvoiceItem
  extends Model<InvoiceItemAttributes, InvoiceItemCreationAttributes>
  implements InvoiceItemAttributes
{
  declare id: number;
  declare invoiceId: number;
  declare productId: number;
  declare quantity: number;
  declare unitPrice: number;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

InvoiceItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    invoiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    unitPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "InvoiceItems",
    timestamps: true,
  },
);

export default InvoiceItem;