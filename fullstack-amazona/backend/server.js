import express from 'express';
import cors from 'cors';
import data from './data.js';

const app = express();
app.use(cors());
// test
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

const port = process.env.PORT || 6200;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});