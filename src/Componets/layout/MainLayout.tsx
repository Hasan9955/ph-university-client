import { Button, Layout } from 'antd'; 
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { logout } from '../../redux/features/auth/authSlice';
import { toast } from 'sonner';
import { useAppDispatch } from '../../redux/hooks';
const { Header, Content, Footer } = Layout;

 
const MainLayout: React.FC = () => {
 
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout())
        toast.error('Logout successfully!', {duration: 2000})
    }
    return (
        <Layout style={{ height: '100vh' }}>
        <Sidebar />
            <Layout>
                <Header> <Button onClick={handleLogout}>Logout</Button> </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: 'white',
                            borderRadius: 50,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;