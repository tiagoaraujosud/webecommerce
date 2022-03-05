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
exports.deleteProduct = exports.updateProduct = exports.createPedido = exports.getProductbyId = exports.getProducts = void 0;
const database_1 = require("../database");
/**GET ALL PRODUCTS */
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_pedido = parseInt(req.params.id_pedido);
    const id_user = parseInt(req.params.id_user);
    const id_product = parseInt(req.params.id_product);
    try {
        const response = yield database_1.pool.query('SELECT * FROM pedidos WHERE');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getProducts = getProducts;
/**GET A PRODUCT BY ID */
const getProductbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM products WHERE id = $1', [id]);
    return res.json(response.rows);
});
exports.getProductbyId = getProductbyId;
/**CREATE A NEW PRODUCT */
const createPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_user, id_product } = req.body;
    //const response: QueryResult = await pool.query('INSERT INTO pedidos (id_user, id_product, pedido) VALUES ($1, $2, $3)', [id_user, id_product, 'Testing current_timestamp function']);
    return res.json({
        message: 'Pedido created successfully',
        body: {
            id_user,
            id_product
        }
    });
});
exports.createPedido = createPedido;
/**UPDATE A PRODUCT BY ID */
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { name, price, img } = req.body;
    yield database_1.pool.query('UPDATE users SET name = $1, price = $2, img = $3 WHERE id = $4', [name, price, img, id]);
    return res.json('Product ' + [id] + ' Updated successfully');
});
exports.updateProduct = updateProduct;
/**DELETE A PRODUCT BY ID */
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    yield database_1.pool.query('DELETE FROM products WHERE id = $1', [id]);
    return res.json('Product ' + [id] + ' deleted successfully');
});
exports.deleteProduct = deleteProduct;
