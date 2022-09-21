"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const database_1 = require("../database");
/**CREATE A NEW ORDER */
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.body;
    const response = yield database_1.pool.query('INSERT INTO orders (user_id) VALUES ($1)', [user_id]);
    return res.json({
        message: 'Order created successfully',
        body: {
            user_id
        }
    });
});
exports.createOrder = createOrder;
