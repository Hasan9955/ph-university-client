import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./adminRoutes";
import { facultyPaths } from "./facultyRoutes";
import { studentPaths } from "./studentRoutes";
import AdminDashboard from "../Pages/admin/AdminDashboard";
import FacultyDashboard from "../Pages/faculty/FacultyDashboard";
import StudentDashboard from "../Pages/student/StudentDashboard";



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/admin',
        element: <AdminDashboard />,
        children: routesGenerator(adminPaths)
    },
    {
        path: '/faculty',
        element: <FacultyDashboard />,
        children: routesGenerator(facultyPaths)
    },
    {
        path: '/student',
        element: <StudentDashboard />,
        children: routesGenerator(studentPaths)
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])


export default router