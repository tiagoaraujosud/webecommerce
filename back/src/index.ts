import express from 'express';
const app = express();
const cors = require('cors');



//middlewares


app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Origin", "*");
    app.use(cors());
    next();
})

app.use(express.urlencoded({extended: false}));

app.listen(4000);

console.log('Sever on port', 4000);

