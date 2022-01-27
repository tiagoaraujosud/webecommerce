import * as yup from 'yup';

const registerSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup().string().min(4).max(10).required()
});

export default registerSchema;