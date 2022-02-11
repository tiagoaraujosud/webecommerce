import { NextFunction } from "express";
import { createUser } from "../controllers/users.controller";

const validation = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body

    try {
        await schema.validate(body);
        next();
        return console.log('deu certo');
    } catch (error) {
        return console.log('deu errado!!!')
    }
};

module.exports = validation