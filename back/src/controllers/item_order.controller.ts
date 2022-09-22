import {Request, response, Response} from 'express';
import {QueryResult} from 'pg';
import {pool} from '../database';

/**GET A ORDER BY ID */
export const getItemsbyOrderId = async (req: Request, res: Response): Promise<Response> => {
    const id_order = parseInt(req.params.id)

    const response: QueryResult = await pool.query('SELECT * FROM item_order WHERE id_order = $1', [id_order])

    return res.json(response.rows);
}

/**CREATE A NEW ITEM ORDER */
export const createItemOrder = async (req: Request, res: Response): Promise<Response> => {
    
    const {id_product, id_order, quant, item_price } = req.body;

    const response: QueryResult = await pool.query('INSERT INTO item_order (id_product, id_order, quant, item_price) VALUES ($1, $2, $3, $4)', [id_product, id_order, quant, item_price]);

    return res.json({
        message: 'Item Order created successfully',
        body: {
            id_product,
            id_order,
            quant,
            item_price
        }
    })
}