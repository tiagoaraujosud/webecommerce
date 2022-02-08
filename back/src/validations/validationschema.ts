import {body} from 'express-validator';

const authSchema = [
    body('email').escape().not().isEmpty().isEmail().withMessage('Must be a valid email'),
    
    body('password').escape().not().isEmpty().withMessage('Password is required')
]
export default authSchema
