import AdminDashboard from "../Pages/admin/AdminDashboard";
import CreateStudent from "../Pages/admin/CreateStudent";
import CreateAdmin from "../Pages/admin/CreateAdmin";
import CreateFaculty from "../Pages/admin/CreateFaculty";
import AcademicSemester from "../Pages/admin/AcademicManagement/AcademicSemester";
 
   
export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'Academic Management',
        children: [
            {
                name: 'Academic Semester',
                path: 'academic-semester',
                element: <AcademicSemester />
            },
        ]
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin />
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />
            },
        ]
    }
]
 