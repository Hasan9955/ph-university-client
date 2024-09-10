import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: 'A-0001',
            password: '123456'
        }
    });


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [login, { error }] = useLoginMutation();

    const submitLogin = async (data: { id: string; password: string; }) => {
        toast.loading('Logging in...')
        try {
            const userInfo = {
                id: data.id,
                password: data.password
            }
    
            const res = await login(userInfo).unwrap()
    
            const user = verifyToken(res.data.accessToken)
            console.log(user);
            dispatch(setUser({
                user,
                token: res.data.accessToken
            }))
    
            navigate(`/${user.role}/dashboard`);
        } catch (error) {
            toast.error('Something went wrong')
        }

    }
    return (
        <form onSubmit={handleSubmit(submitLogin)}>
            <div>
                <label htmlFor="id">ID: </label>
                <input type="text" id="id" {...register('id')} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" {...register('password')} />
            </div>
            <Button htmlType="submit">Login</Button>
        </form>
    );
};

export default Login;