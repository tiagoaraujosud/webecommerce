import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup.string().min(4).max(5).required()
});

export default registerSchema;