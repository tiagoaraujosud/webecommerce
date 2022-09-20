import {Request, response, Response} from 'express';
import {QueryResult} from 'pg';
import {pool} from '../database';
import { getUsers, getUserbyId } from './users.controller';
import { getProductbyId } from './products.controller';


/**GET ALL ORDERS */
export const getOrders = async (req: Request, res: Response): Promise<Response> => {
    const id_order = parseInt(req.params.id_order);
    const id_user = parseInt(req.params.id_user);
    
    try{
        const response: QueryResult = await pool.query('SELECT * FROM pedidos WHERE');

        return res.status(200).json(response.rows);

    }catch(e){
        console.log(e)

        return res.status(500).json('Internal Server error');
    }
}

/**GET AN ORDER BY ID */
export const getOrderbyId = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id)

    const response: QueryResult = await pool.query('SELECT * FROM products WHERE id = $1', [id])

    return res.json(response.rows);
}

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

/**UPDATE AN ORDER BY ID */
export const updateOrder = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const {name, price, img} = req.body;

    await pool.query('UPDATE users SET name = $1, price = $2, img = $3 WHERE id = $4', [name, price, img, id]);

    return res.json('Product ' + [id] + ' Updated successfully')
}

/**DELETE AN ORDER BY ID */
export const deleteOrder = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    await pool.query('DELETE FROM orders WHERE id = $1', [id]);

    return res.json('Product ' + [id] + ' deleted successfully');
}
