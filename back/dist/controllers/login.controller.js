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
exports.logout = exports.login = exports.getLogin = exports.verifyJWT = void 0;
const database_1 = require("../database");
const jwt = require('jsonwebtoken');
const SECRET = 'adminadmin';
function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err)
            return res.status(401).end();
        req.body.email = decoded.email;
        next();
    });
}
exports.verifyJWT = verifyJWT;
/**GET LOGIN */
const getLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    verifyJWT;
    return res.json(req.body.email);
});
exports.getLogin = getLogin;
/**LOGIN AUTHENTICATION */
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield database_1.pool.query('SELECT FROM users WHERE email = $1', [email]);
    const user_pass = yield database_1.pool.query('SELECT FROM users WHERE password = $1', [password]);
    if (req.body.email === user && req.body.password === user_pass) {
        const token = jwt.sign({ email: email }, SECRET, { expiresIn: 600 });
        return res.json({ auth: true, token });
    }
    else
        return res.status(401);
});
exports.login = login;
/**LOGOUT */
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.end();
});
exports.logout = logout;
