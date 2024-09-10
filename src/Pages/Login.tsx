import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi"; 
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppDispatch } from "../redux/hooks";


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
    const [login] = useLoginMutation();

    const submitLogin = async (data: FieldValues) => {
        const toastId = toast.loading('Logging in...')
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
            toast.success('Login successfully!', {id: toastId, duration: 2000})
            navigate(`/${user.role}/dashboard`);
        } catch (error) {
            toast.error('Something went wrong', {id: toastId, duration: 2000})
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