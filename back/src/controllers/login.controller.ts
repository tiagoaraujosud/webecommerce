import {NextFunction, Request, response, Response} from 'express';
import {QueryResult} from 'pg';
import {pool} from '../database';

const jwt = require('jsonwebtoken');
const SECRET = 'adminadmin';

export function verifyJWT(req: Request, res: Response, next: NextFunction){
    const token = req.headers['x-access-token'];
    jwt.verify(token, SECRET, (err: any, decoded: any) =>{
        if(err) return res.status(401).end();
        req.body.email = decoded.email;
        next();
    })
}

/**GET LOGIN */
export const getLogin = async (req: Request, res: Response): Promise<Response> => {
    verifyJWT;
    return res.json([{email: 'admin', password: 'admin' }]); 
}

/**LOGIN */
export const login = async (req: Request, res: Response): Promise<Response> => {
 
    const {email, password } = req.body;

    const user_email = await pool.query('SELECT email FROM users WHERE email = millie@gmail.com');
    //const user_pass: QueryResult = await pool.query('SELECT password FROM users WHERE password = $1', [password]);

    if (req.body.email === user_email && req.body.password === '123456') {
        const token = jwt.sign({email: email}, SECRET, {expiresIn: 600});
        res.json({message: 'Ok'});
        return res.json({auth:true, token});        
    }else 
    return res.status(401).end();
}

/**LOGOUT */
export const logout = async (req: Request, res: Response) => {
        
    res.end();        

}

