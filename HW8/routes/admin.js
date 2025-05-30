const express = require('express');
const authMiddleware = require('../middlewares/auth/authMiddleware');
const router = express.Router();
const adminController = require("../controllers/admin");
//router.use(authMiddleware);
router.get('/add-product',authMiddleware,adminController.getAddProduct);
router.post('/add-product',authMiddleware,adminController.postAddProduct);

router.get('/products',adminController.getProducts);
router.get('/edit-product/:ProductId',adminController.getEditProduct);
router.post('/edit-product',adminController.postEditProduct);
router.get('/delete-product/:ProductId',adminController.getDeleteProduct);
module.exports = router;