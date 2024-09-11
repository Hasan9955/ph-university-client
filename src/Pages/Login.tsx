import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppDispatch } from "../redux/hooks";
import PHForm from "../Componets/form/PHForm";
import PHInput from "../Componets/form/PHInput";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    /* const { register } = useForm({
        defaultValues: {
            id: 'A-0001',
            password: '123456'
        }
    }); */

    const [login] = useLoginMutation();

    const defaultValues = {
        id: 'A-0001',
        password: '123456'
    }
    const submitLogin = async (data: FieldValues) => {
        const toastId = toast.loading('Logging in...')
        console.log(data);
        try {
            const userInfo = {
                id: data.id,
                password: data.password
            }

            const res = await login(userInfo).unwrap()

            const user = verifyToken(res.data.accessToken) as TUser;
            console.log(user);
            dispatch(setUser({
                user,
                token: res.data.accessToken
            }))
            toast.success('Login successfully!', { id: toastId, duration: 2000 })
            navigate(`/${user.role}/dashboard`);
        } catch (error) {
            toast.error('Something went wrong', { id: toastId, duration: 2000 })
        }

    }
    return (
        <Row align='middle' justify='center' style={{ height: '100vh' }}>
            <PHForm onSubmit={submitLogin} defaultValues={defaultValues}>
                <PHInput type='text' name='id' label='ID: ' />
                <PHInput type='text' name='password' label='Password: ' />
                <Button htmlType="submit">Login</Button>
            </PHForm>
        </Row>
    );
};

export default Login;