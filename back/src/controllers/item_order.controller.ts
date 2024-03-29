import {Request, response, Response} from 'express';
import {QueryResult} from 'pg';
import {pool} from '../database';

/** CREATE A NEW ITEM ORDER */
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

/** GET AN ITEM ORDER BY ORDER ID */
export const getItemsbyOrderId = async (req: Request, res: Response): Promise<Response> => {
    const id_order = parseInt(req.params.id)

    const response: QueryResult = await pool.query('SELECT * FROM item_order WHERE id_order = $1', [id_order])

    return res.json(response.rows);
}

/** GET AN ITEM ORDER BY USER ID */
export const getItemsbyUserId = async (req: Request, res: Response): Promise<Response> => {
    const id_user = parseInt(req.params.id)

    const response: QueryResult = await pool.query('SELECT user_id, order_id FROM orders CROSS JOIN item_order WHERE user_id = $1', [id_user]);
    
    return res.json(response.rows);
}

/** UPDATE THE QUANTITY OF AN ITEM BY ID */
export const updateItemsbyId = async (req: Request, res: Response): Promise<Response> => {
    const id_item_order = parseInt(req.params.id);
    const id_order = parseInt(req.params.id_order);

    const {quant} = req.body;

    await pool.query('UPDATE item_order SET quant = $1 WHERE id_item_order = $2 AND id_order = $3', [quant, id_item_order, id_order]);

    return res.json('Item ' + [id_item_order] + ' Updated successfully')
}

/** DELETE AN ITEM ORDER BY ID */
export const deleteItembyId = async (req: Request, res: Response): Promise<Response> => {
    const id_item_order = parseInt(req.params.id);
    const id_order = parseInt(req.params.id_order);

    const response: QueryResult = await pool.query('DELETE FROM item_order WHERE id_item_order = $1 AND id_order = $2', [id_item_order, id_order]);

    return res.json('Item Order ' + [id_item_order] + ' deleted successfully');
}

