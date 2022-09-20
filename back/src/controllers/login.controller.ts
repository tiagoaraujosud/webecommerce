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
 
    if (req.body.email === 'admin' && req.body.password === 'admin') {
        const token = jwt.sign({email: 'admin'}, SECRET, {expiresIn: 300});
        res.json({message: 'Ok'});
        return res.json({auth:true, token});        
    }else 
    return res.status(401);
}

/**LOGOUT */
export const logout = async (req: Request, res: Response) => {
        
    res.end();        

}

