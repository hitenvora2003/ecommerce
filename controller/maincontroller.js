const user = require("../model/user");
const address = require("../model/address");
const category = require("../model/Category");
const product = require("../model/product");
const order = require("../model/order")
const payment = require("../model/payment");
const wishlist = require("../model/wishlist");
const cart = require("../model/cart");
const coupon = require("../model/coupon");
const review = require("../model/review")

exports.getAllData = async (req, res) => {
  try {

    const types = req.query.type; // optional

    // jo query na hoy to badhu laavso
    if (!types) {
      const [users,addresses, categories,products,orders,payments,wishlists,carts,coupons,reviews] = await Promise.all([
        user.find().sort({ createdAt: -1 }).limit(100),
        address.find().sort({ createdAt: -1 }).limit(100),
        category.find().sort({ createdAt: -1 }).limit(100),
        product.find().sort({ createdAt: -1 }).limit(100),
        order.find().sort({ createdAt: -1 }).limit(100),
        payment.find().sort({ createdAt: -1 }).limit(100),
        wishlist.find().sort({ createdAt: -1 }).limit(100),
        cart.find().sort({ createdAt: -1 }).limit(100),
        coupon.find().sort({ createdAt: -1 }).limit(100),
        review.find().sort({ createdAt: -1 }).limit(100)
        


      ]);

      return res.status(200).json({
        status: "success",
        data:{users,addresses, categories,products,orders,payments,wishlists,carts,coupons,reviews}
      });
    }

    // specific case
    const typeArray = types.split(",");
    let result = {};

    if (typeArray.includes("users")) {
      result.users = await user.find().sort({ createdAt: -1 }).limit(100);
    }

    if (typeArray.includes("addresses")) {
      result.addresses = await address.find().sort({ createdAt: -1 }).limit(100);
    }

    if (typeArray.includes("categoriese")) {
      result.categories = await category.find().sort({ createdAt: -1 }).limit(100);
    }

    if (typeArray.includes("products")) {
      result.products = await product.find().sort({ createdAt: -1 }).limit(100);
    }
    if (typeArray.includes("orders")) {
      result.orders = await order.find().sort({ createdAt: -1 }).limit(100);
    }

    if (typeArray.includes("payments")) {
      result.payments = await payment.find().sort({ createdAt: -1 }).limit(100);
    }

    if (typeArray.includes("wishlists")) {
      result.wishlists = await wishlist.find().sort({ createdAt: -1 }).limit(100);
    }

    if (typeArray.includes("carts")) {
      result.carts = await cart.find().sort({ createdAt: -1 }).limit(100);
    }
        if (typeArray.includes("coupons")) {
      result.coupons = await coupon.find().sort({ createdAt: -1 }).limit(100);
    }
        if (typeArray.includes("reviews")) {
      result.reviews = await review.find().sort({ createdAt: -1 }).limit(100);
    }

    res.status(200).json({
      status: "success",
      data: result
    });

  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message
    });
  }
};