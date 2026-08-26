import { renderOrderSummary } from "./checkout/orderSummery.js";
import { renderPaymentSummary } from "./checkout/paymentSummery.js";
//import '../data/cart-class.js';
import "../data/backend-practice.js";
import { loadProducts } from "../data/products.js";

loadProducts(() => {
  renderPaymentSummary();
  renderOrderSummary();
});
