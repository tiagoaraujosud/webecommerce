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

/**GET ALL USERS */
export const getOrders = async (req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult = await pool.query('SELECT * FROM orders');

        return res.status(200).json(response.rows);

    }catch(e){

        return res.status(500).json('Internal Server error');
    }
}

/**GET A ORDER BY ID */
export const getOrderbyId = async (req: Request, res: Response): Promise<Response> => {
    const order_id = parseInt(req.params.id)

    const response: QueryResult = await pool.query('SELECT * FROM orders WHERE order_id = $1', [order_id])

    return res.json(response.rows);
}

/**DELETE AN ORDER BY ID */
export const deleteOrder = async (req: Request, res: Response): Promise<Response> => {
    const order_id = parseInt(req.params.id);

    const response: QueryResult = await pool.query('DELETE FROM orders WHERE order_id = $1', [order_id]);

    return res.json('Order ' + [order_id] + ' deleted successfully');
}