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
exports.deleteOrder = exports.getOrderbyId = exports.getOrders = exports.createOrder = void 0;
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
/**GET ALL ORDERS */
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM orders');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Internal Server error');
    }
});
exports.getOrders = getOrders;
/**GET A ORDER BY ID */
const getOrderbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order_id = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM orders WHERE order_id = $1', [order_id]);
    return res.json(response.rows);
});
exports.getOrderbyId = getOrderbyId;
/**DELETE AN ORDER BY ID */
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order_id = parseInt(req.params.id);
    const response = yield database_1.pool.query('DELETE FROM orders WHERE order_id = $1', [order_id]);
    return res.json('Order ' + [order_id] + ' deleted successfully');
});
exports.deleteOrder = deleteOrder;
