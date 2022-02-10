import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup.string().min(6).max(12).required('Required')
});

export default registerSchema;