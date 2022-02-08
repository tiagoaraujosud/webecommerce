"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const authSchema = [
    (0, express_validator_1.body)('email').escape().not().isEmpty().isEmail().withMessage('Must be a valid email'),
    (0, express_validator_1.body)('password').escape().not().isEmpty().withMessage('Password is required')
];
exports.default = authSchema;
