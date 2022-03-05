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
exports.logout = exports.login = exports.getLogin = void 0;
/**GET LOGIN */
const getLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json([{ email: 'admin', password: 'admin' }]);
});
exports.getLogin = getLogin;
/**LOGIN */
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.user === 'admin' && req.body.password === 'admin') {
        res.end();
    }
    res.status(401).end();
});
exports.login = login;
/**LOGOUT */
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.end();
});
exports.logout = logout;
