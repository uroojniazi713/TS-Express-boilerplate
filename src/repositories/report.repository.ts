import sequelize from "@/config/database.js";

import {
  Customer,
  Invoice,
  InvoiceItem,
} from "@/models/index.js";

export const getRevenueByMonth = async () => {
  const results = await Invoice.findAll({
    attributes: [
      [
        sequelize.fn(
          "DATE_TRUNC",
          "month",
          sequelize.col("Invoice.createdAt")
        ),
        "month",
      ],
      [
        sequelize.fn(
          "SUM",
          sequelize.literal(
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
      sequelize.col("Invoice.createdAt"),
    ],

    order: [["month", "ASC"]],

    raw: true,
  });

  return results;
};


export const getTopCustomers = async (
  page: number,
  limit: number
) => {
  const offset = (page - 1) * limit;

  const results = await Customer.findAll({
    attributes: [
      "id",
      "name",
      [
        sequelize.fn(
          "SUM",
          sequelize.literal(
            `"Invoices->InvoiceItems"."quantity" * "Invoices->InvoiceItems"."unitPrice"`
          )
        ),
        "revenue",
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

    order: [["revenue", "DESC"]],

    limit,
    offset,

    // Prevent Sequelize from creating a subquery
    subQuery: false,

    raw: true,
  });

  const total = await Customer.count({
    distinct: true,

    include: [
      {
        model: Invoice,
        required: true,
        include: [
          {
            model: InvoiceItem,
            required: true,
          },
        ],
      },
    ],
  });

  return {
    results,
    total,
  };
};
