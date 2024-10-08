import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./adminRoutes";
import { facultyPaths } from "./facultyRoutes";
import { studentPaths } from "./studentRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/admin',
        element: <App />,
        children: routesGenerator(adminPaths)
    },
    {
        path: '/faculty',
        element: <App />,
        children: routesGenerator(facultyPaths)
    },
    {
        path: '/student',
        element: <App />,
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