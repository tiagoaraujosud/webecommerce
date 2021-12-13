import {Request, Response} from 'express';
import {QueryResult} from 'pg';
import {pool} from '../database'

/**GET ALL USERS */
export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult = await pool.query('SELECT * FROM users');

        return res.status(200).json(response.rows);

    }catch(e){
        console.log(e)

        return res.status(500).json('Internal Server error');
    }
}

/**GET A USER BY ID */
export const getUserbyId = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id)

    const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id])

    return res.json(response.rows);
}

/**CREATE A NEW USER */
export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const {email, senha} = req.body;

    const resopnse: QueryResult = await pool.query('INSERT INTO users (email, senha) VALUES ($1, $2)', [email, senha]);

    return res.json({
        message: 'User created successfully',
        body: {
            email,
            senha
        }
    })
}

/**UPDATE A USER BY ID */
export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const {email, senha} = req.body;

    await pool.query('UPDATE users SET email = $1, senha = $2 WHERE id = $3', [email, senha, id]);

    return res.json('User ' + [id] + ' Updated successfully')
}

/**DELETE A USER BY ID */
export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    await pool.query('DELETE FROM users WHERE id = $1', [id]);

    return res.json('User ' + [id] + ' deleted successfully');
}
