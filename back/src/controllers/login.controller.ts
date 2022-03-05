import {Request, response, Response} from 'express';
import {QueryResult} from 'pg';
import {pool} from '../database';

/**GET LOGIN */
export const getLogin = async (req: Request, res: Response): Promise<Response> => {
    
    return res.json([{email: 'admin', password: 'admin' }]);
    
}

/**LOGIN */
export const login = async (req: Request, res: Response) => {
    
    if (req.body.user === 'admin'&& req.body.password === 'admin') {
        res.end();        
    }
    res.status(401).end();
}

/**LOGOUT */
export const logout = async (req: Request, res: Response) => {
        
    res.end();        

}

