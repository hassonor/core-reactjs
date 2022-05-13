import express from 'express';
import Product from "../models/productModel";
import data from '../data';

const seedRouter = express.Router();


seedRouter.get('/', async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
})

export default seedRouter;