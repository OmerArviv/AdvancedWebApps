const express = require('express');
const productsController = require('../controllers/productsController');
const app = express()
const router = express.Router();

router.route('/')
    .get(productsController.getAllProducts)
    .post(productsController.saveNewOrder)


router.route('/p/:name')
    .get(productsController.getProductByName)



module.exports = router;