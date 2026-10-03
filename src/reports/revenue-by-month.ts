import { Invoice, InvoiceItem } from "@/models/index.js";
import { fn, col, literal } from "sequelize";

const result = await Invoice.findAll({
  attributes: [
    [
      fn("DATE_TRUNC", "month", col("Invoice.createdAt")),
      "month",
    ],
    [
      fn(
        "SUM",
        literal(
          `"InvoiceItems"."quantity" * "InvoiceItems"."unitPrice"`
        )
      ),
      "revenue",
    ],
  ],
  include: [
    {
      model: InvoiceItem,
      attributes: [],
    },
  ],
  group: [
    fn("DATE_TRUNC", "month", col("Invoice.createdAt")),
  ],
  order: [
    [
      fn("DATE_TRUNC", "month", col("Invoice.createdAt")),
      "ASC",
    ],
  ],
  raw: true,
});

console.log(result);