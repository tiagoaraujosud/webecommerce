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
    return res.json(req.body.email); 
}

/**LOGIN AUTHENTICATION */
export const login = async (req: Request, res: Response): Promise<Response> => {
 
    const {email, password } = req.body;

    const user: QueryResult = await pool.query('SELECT email FROM users WHERE email = $1', [email]);
  
    const user_pass: QueryResult = await pool.query('SELECT password FROM users WHERE password = $1', [password]);
    
    if (req.body.email === user.rows[0].email && req.body.password === user_pass.rows[0].password) {
        const token = jwt.sign({email: email}, SECRET, {expiresIn: 600});
        console.log('Login Efetuado com sucesso!');
        return res.json({auth:true, token});        
    }else{
        return res.status(401);
    }
}

/**LOGOUT */
export const logout = async (req: Request, res: Response) => {
        
    res.end();        

}
