import {Request, response, Response} from 'express';
import {QueryResult} from 'pg';
import {pool} from '../database';
import { getUsers, getUserbyId } from './users.controller';

/**GET ALL PRODUCTS */
export const getProducts = async (req: Request, res: Response): Promise<Response> => {
    const id_pedido = parseInt(req.params.id_pedido);
    const id_user = parseInt(req.params.id_user);
    const id_product = parseInt(req.params.id_product);
    
    try{
        const response: QueryResult = await pool.query('SELECT * FROM pedidos WHERE');

        return res.status(200).json(response.rows);

    }catch(e){
        console.log(e)

        return res.status(500).json('Internal Server error');
    }
}

/**GET A PRODUCT BY ID */
export const getProductbyId = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id)

    const response: QueryResult = await pool.query('SELECT * FROM products WHERE id = $1', [id])

    return res.json(response.rows);
}

/**CREATE A NEW PRODUCT */
export const createPedido = async (req: Request, res: Response): Promise<Response> => {
    
    const {id_user, id_product} = req.body;

    //const response: QueryResult = await pool.query('INSERT INTO pedidos (id_user, id_product, pedido) VALUES ($1, $2, $3)', [id_user, id_product, 'Testing current_timestamp function']);

    return res.json({
        message: 'Pedido created successfully',
        body: {
            id_user,
            id_product
        }
    })
}

/**UPDATE A PRODUCT BY ID */
export const updateProduct = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const {name, price, img} = req.body;

    await pool.query('UPDATE users SET name = $1, price = $2, img = $3 WHERE id = $4', [name, price, img, id]);

    return res.json('Product ' + [id] + ' Updated successfully')
}

/**DELETE A PRODUCT BY ID */
export const deleteProduct = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    await pool.query('DELETE FROM products WHERE id = $1', [id]);

    return res.json('Product ' + [id] + ' deleted successfully');
}
