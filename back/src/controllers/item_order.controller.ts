import {Request, response, Response} from 'express';
import {QueryResult} from 'pg';
import {pool} from '../database';

/**GET A ORDER BY ID */
export const getItemsbyOrderId = async (req: Request, res: Response): Promise<Response> => {
    const id_order = parseInt(req.params.id)

    const response: QueryResult = await pool.query('SELECT * FROM item_order WHERE id_order = $1', [id_order])

    return res.json(response.rows);
}