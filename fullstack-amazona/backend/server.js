import express from 'express';
import data from './data.js';

const app = express();
// test
app.get('/api/products', (req, res) => {
    res.send(data.products);
});

const port = process.env.PORT || 6200;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});