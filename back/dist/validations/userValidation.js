"use strict";
const yup = require('yup');
const userSchema = yup.object({
    email: yup.string().email().required(),
    senha: yup.string().min(4).max(15).required()
});
module.exports = userSchema;
