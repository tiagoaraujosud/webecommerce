"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors = require('cors');
//middlewares
app.use(express_1.default.json());
app.use((req, res, next) => {
    res.header("Access-Control-Origin", "*");
    app.use(cors());
    next();
});
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(4000);
console.log('Sever on port', 4000);
