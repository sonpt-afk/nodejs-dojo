const express = require("express");

const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts); // Make sure this line is correct

router.get("/products/:productId", shopController.getProduct);

//cart

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.postCart);

router.post("/cart-delete-item", shopController.postCartDeleteProduct);

//order

router.get("/orders", shopController.getOrders);

//checkout

router.get("/checkout", shopController.getCheckout);

module.exports = router;
