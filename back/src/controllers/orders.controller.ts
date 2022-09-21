import {Request, response, Response} from 'express';
import {QueryResult} from 'pg';
import {pool} from '../database';

/**CREATE A NEW ORDER */
export const createOrder = async (req: Request, res: Response): Promise<Response> => {
    
    const {user_id} = req.body;

    const response: QueryResult = await pool.query('INSERT INTO orders (user_id) VALUES ($1)', [user_id]);

    return res.json({
        message: 'Order created successfully',
        body: {
            user_id
        }
    })
}