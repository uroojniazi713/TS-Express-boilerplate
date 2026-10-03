import sequelize from "@/config/database.js";

const [result] = await sequelize.query(`
  SELECT
    c.name,
    SUM(ii."quantity" * ii."unitPrice") AS total_revenue
  FROM "Customers" c
  JOIN "Invoices" i
    ON c.id = i."customerId"
  JOIN "InvoiceItems" ii
    ON ii."invoiceId" = i.id
  GROUP BY c.id, c.name
  ORDER BY total_revenue DESC;
`);

console.log(result);