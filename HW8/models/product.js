const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:{type:String,required:true},
    price: Number,
    description:String
});

module.exports = mongoose.model("product",ProductSchema)