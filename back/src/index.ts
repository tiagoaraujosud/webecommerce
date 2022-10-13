import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
const cors = require('cors');

import indexRoutes from './routes/index'


//middlewares

dotenv.config();

app.use(express.json());

app.use(cookieParser());

app.use(cors());

app.use(express.urlencoded({extended: false}));

app.use(indexRoutes);

app.listen(4000);

console.log('Sever on port', 4000);

