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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserbyId = exports.getUsers = void 0;
const database_1 = require("../database");
/**GET ALL USERS */
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM users');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getUsers = getUsers;
/**GET A USER BY ID */
const getUserbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.json(response.rows);
});
exports.getUserbyId = getUserbyId;
/**CREATE A NEW USER */
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, senha } = req.body;
    const resopnse = yield database_1.pool.query('INSERT INTO users (email, senha) VALUES ($1, $2)', [email, senha]);
    return res.json({
        message: 'User created successfully',
        body: {
            email,
            senha
        }
    });
});
exports.createUser = createUser;
/**UPDATE A USER BY ID */
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { email, senha } = req.body;
    yield database_1.pool.query('UPDATE users SET email = $1, senha = $2 WHERE id = $3', [email, senha, id]);
    return res.json('User ' + [id] + ' Updated successfully');
});
exports.updateUser = updateUser;
/**DELETE A USER BY ID */
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    yield database_1.pool.query('DELETE FROM users WHERE id = $1', [id]);
    return res.json('User ' + [id] + ' deleted successfully');
});
exports.deleteUser = deleteUser;
