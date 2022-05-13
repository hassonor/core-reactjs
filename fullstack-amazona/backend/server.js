const morgan = require('morgan')
import express from 'express';
import helmet from "helmet";
import cors from 'cors';
import data from './data.js';

import dotenv from 'dotenv';

import('./dal/dal')
dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.products.find((x) => x.slug === req.params.slug);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({message: 'Product Not Found'});
    }
});

app.get('/api/products/:id', (req, res) => {

    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        console.log(product.countInStock);
        res.send(product);
    } else {
        res.status(404).send({message: 'Product Not Found'});
    }
});

app.use("*", (request, response) => response.status(404).send("Route not found."));

const port = process.env.PORT || 6200;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});