import { Customer, Invoice, InvoiceItem } from "@/models/index.js";
import { fn, literal } from "sequelize";

const result = await Customer.findAll({
  attributes: [
    "name",
    [
      fn(
        "SUM",
        literal(`"Invoices->InvoiceItems"."quantity" * "Invoices->InvoiceItems"."unitPrice"`)
      ),
      "total_revenue",
    ],
  ],
  include: [
    {
      model: Invoice,
      attributes: [],
      include: [
        {
          model: InvoiceItem,
          attributes: [],
        },
      ],
    },
  ],
  group: ["Customer.id", "Customer.name"],
  order: [["total_revenue", "DESC"]],
  raw: true,
});

console.log(result);