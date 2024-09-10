import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { generateSidebarItems } from '../../utils/sidebarItems';
import { adminPaths } from '../../routes/adminRoutes';
import { facultyPaths } from '../../routes/facultyRoutes';
import { studentPaths } from '../../routes/studentRoutes';



const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
}
const Sidebar = () => {

    const role = 'admin'
    let sidebarItems;


    switch (role) {
        case userRole.ADMIN:
            sidebarItems = generateSidebarItems(adminPaths, userRole.ADMIN)
        break;
        case userRole.FACULTY:
            sidebarItems = generateSidebarItems(facultyPaths, userRole.FACULTY)
        break;
        case userRole.STUDENT:
            sidebarItems = generateSidebarItems(studentPaths, userRole.STUDENT)
        break;
    }

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div
                style={{
                    height: "3rem",
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <h1>PH University</h1>
            </div>
            <Menu theme="dark" mode="inline"
                defaultSelectedKeys={['4']}
                items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;