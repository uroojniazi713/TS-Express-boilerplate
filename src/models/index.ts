import Organization from "./organization.model.js";
import Customer from "./customer.model.js";
import Product from "./product.model.js";
import Invoice from "./invoice.model.js";
import InvoiceItem from "./invoice-item.model.js";
import { User } from "./user.model.js";
import { RefreshToken } from "./refresh-token.model.js"
import { PasswordResetToken } from "./password-reset-token.model.js";

Organization.hasMany(Customer, {
    foreignKey: "organizationId",
  });
  
  Customer.belongsTo(Organization, {
    foreignKey: "organizationId",
  });

  Organization.hasMany(Product, {
    foreignKey: "organizationId",
  });
  
  Product.belongsTo(Organization, {
    foreignKey: "organizationId",
  });

  Organization.hasMany(Invoice, {
    foreignKey: "organizationId",
  });
  
  Invoice.belongsTo(Organization, {
    foreignKey: "organizationId",
  });

  Customer.hasMany(Invoice, {
    foreignKey: "customerId",
  });
  
  Invoice.belongsTo(Customer, {
    foreignKey: "customerId",
  });

  Invoice.hasMany(InvoiceItem, {
    foreignKey: "invoiceId",
  });
  
  InvoiceItem.belongsTo(Invoice, {
    foreignKey: "invoiceId",
  });

  Product.hasMany(InvoiceItem, {
    foreignKey: "productId",
  });
  
  InvoiceItem.belongsTo(Product, {
    foreignKey: "productId",
  });

  Invoice.belongsToMany(Product, {
    through: InvoiceItem,
    foreignKey: "invoiceId",
    otherKey: "productId",
  });
  
  Product.belongsToMany(Invoice, {
    through: InvoiceItem,
    foreignKey: "productId",
    otherKey: "invoiceId",
  });

  User.hasMany(PasswordResetToken, {
    foreignKey: "userId",
  });
  
  PasswordResetToken.belongsTo(User, {
    foreignKey: "userId",
  });

  export {
    Organization,
    Customer,
    Product,
    Invoice,
    InvoiceItem,
    User,
    RefreshToken,
    PasswordResetToken,
  };