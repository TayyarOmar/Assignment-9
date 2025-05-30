const Product = require("../models/product");

exports.getAddProduct= (req,res,next)=> {
    res.render("admin/add-product",{title:"Add Product",isAuth:req.session.isAuthenticated});
};
exports.postAddProduct= (req,res,next)=>{
    const new_product = new Product({
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    });
    new_product.save();
    res.redirect("/admin/products");
};
exports.getEditProduct= (req,res,next)=> {
    const product_id = req.params.ProductId;
    Product.findById(product_id).then((product)=>{
        res.render("admin/edit-product",{title:"Edit Product",prod:product,isAuth:req.session.isAuthenticated});
    });

};
exports.postEditProduct= (req,res,next)=>{
    const product_id = req.body.productId;
    Product.findById(product_id).then((product)=>{
        product.name = req.body.name;
        product.description= req.body.description;
        product.price = req.body.price;
        product.save();
        res.redirect("/admin/products");
    });

};
exports.getDeleteProduct= (req,res,next)=>{
   const product_id = req.params.ProductId;
   Product.findByIdAndDelete(product_id).then((p)=>{
        res.redirect("/admin/products");
   })

};

exports.getProducts = (req,res,next)=> {
    Product.find().then((allproducts)=>{
        res.render("admin/products",{title:"All Products",products:allproducts, isAuth:req.session.isAuthenticated});
    })

};
