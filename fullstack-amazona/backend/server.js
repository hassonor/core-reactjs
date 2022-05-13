import seedRouter from "./routes/seedRoutes";

const morgan = require('morgan')
import express from 'express';
import helmet from "helmet";
import cors from 'cors';
import data from './data.js';

import dotenv from 'dotenv';
import productRouter from "./routes/productRoutes";

import('./dal/dal')
dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);


app.use("*", (request, response) => response.status(404).send("Route not found."));

const port = process.env.PORT || 6200;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});