const Product = require("../models/product");

exports.getIndex = (req,res,next)=> {};
exports.getProducts = (req,res,next)=> {
    Product.find().then((allproducts)=>{
        res.render("shop/product-list",{title:"All Products",products:allproducts, isAuth:req.session.isAuthenticated});
    })

};
exports.getProduct = (req,res,next)=> {};
exports.postCart= (req,res,next)=> {};
exports.getCart= (req,res,next)=> {};
exports.postCartDeleteItem= (req,res,next)=> {};
exports.postOrder= (req,res,next)=> {};
exports.getOrders= (req,res,next)=> {};