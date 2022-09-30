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
exports.deleteItembyId = exports.updateItemsbyId = exports.getItemsbyUserId = exports.getItemsbyOrderId = exports.createItemOrder = void 0;
const database_1 = require("../database");
/** CREATE A NEW ITEM ORDER */
const createItemOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_product, id_order, quant, item_price } = req.body;
    const response = yield database_1.pool.query('INSERT INTO item_order (id_product, id_order, quant, item_price) VALUES ($1, $2, $3, $4)', [id_product, id_order, quant, item_price]);
    return res.json({
        message: 'Item Order created successfully',
        body: {
            id_product,
            id_order,
            quant,
            item_price
        }
    });
});
exports.createItemOrder = createItemOrder;
/** GET AN ITEM ORDER BY ORDER ID */
const getItemsbyOrderId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_order = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM item_order WHERE id_order = $1', [id_order]);
    return res.json(response.rows);
});
exports.getItemsbyOrderId = getItemsbyOrderId;
/** GET AN ITEM ORDER BY USER ID */
const getItemsbyUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_user = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT user_id, order_id FROM orders CROSS JOIN item_order WHERE user_id = $1', [id_user]);
    return res.json(response.rows);
});
exports.getItemsbyUserId = getItemsbyUserId;
/** UPDATE THE QUANTITY OF AN ITEM BY ID */
const updateItemsbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_item_order = parseInt(req.params.id);
    const id_order = parseInt(req.params.id_order);
    const { quant } = req.body;
    yield database_1.pool.query('UPDATE item_order SET quant = $1 WHERE id_item_order = $2 AND id_order = $3', [quant, id_item_order, id_order]);
    return res.json('Item ' + [id_item_order] + ' Updated successfully');
});
exports.updateItemsbyId = updateItemsbyId;
/** DELETE AN ITEM ORDER BY ID */
const deleteItembyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_item_order = parseInt(req.params.id);
    const id_order = parseInt(req.params.id_order);
    const response = yield database_1.pool.query('DELETE FROM item_order WHERE id_item_order = $1 AND id_order = $2', [id_item_order, id_order]);
    return res.json('Item Order ' + [id_item_order] + ' deleted successfully');
});
exports.deleteItembyId = deleteItembyId;
