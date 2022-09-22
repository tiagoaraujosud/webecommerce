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
exports.createItemOrder = exports.getItemsbyOrderId = void 0;
const database_1 = require("../database");
/**GET A ORDER BY ID */
const getItemsbyOrderId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_order = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM item_order WHERE id_order = $1', [id_order]);
    return res.json(response.rows);
});
exports.getItemsbyOrderId = getItemsbyOrderId;
/**CREATE A NEW ITEM ORDER */
const createItemOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_product, id_order, quant, item_price } = req.body;
    const response = yield database_1.pool.query('INSERT INTO item_order (id_product, id_order, quant, item_price) VALUES ($1, $2, $3, $4)', [id_product, id_order, quant, item_price]);
    return res.json({
        message: 'Order created successfully',
        body: {
            id_product,
            id_order,
            quant,
            item_price
        }
    });
});
exports.createItemOrder = createItemOrder;
