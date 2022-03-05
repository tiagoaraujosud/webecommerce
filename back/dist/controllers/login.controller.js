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
//import {QueryResult} from 'pg';
//import {pool} from '../database';
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
    return res.json([{ email: 'admin', password: 'admin' }]);
});
exports.getLogin = getLogin;
/**LOGIN */
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.email === 'admin' && req.body.password === 'admin') {
        const token = jwt.sign({ email: 'admin' }, SECRET, { expiresIn: 300 });
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
