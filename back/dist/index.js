"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const cors = require('cors');
const index_1 = __importDefault(require("./routes/index"));
//middlewares
dotenv_1.default.config();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(cors());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(index_1.default);
app.listen(4000);
console.log('Sever on port', 4000);
