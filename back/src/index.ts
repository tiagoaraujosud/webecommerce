import express from 'express';
const app = express();
const cors = require('cors');

import indexRoutes from './routes/index'


//middlewares

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({extended: false}));

app.use(indexRoutes);

app.listen(4000);

console.log('Sever on port', 4000);

