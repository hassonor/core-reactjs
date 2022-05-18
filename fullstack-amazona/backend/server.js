const morgan = require('morgan') // using require here to prevent warning bug
import express from 'express';
import helmet from "helmet";
import cors from 'cors';
import dotenv from 'dotenv';
import seedRouter from "./routes/seedRoutes";
import productRouter from "./routes/productRoutes";
import userRouter from "./routes/userRoutes";
import orderRouter from "./routes/orderRoutes";

import('./dal/dal')
dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/keys/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);


app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})

app.use("*", (request, response) => response.status(404).send("Route not found."));

const port = process.env.PORT || 6200;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});