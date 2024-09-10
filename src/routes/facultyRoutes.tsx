import FacultyDashboard from "../Pages/faculty/FacultyDashboard";

export const facultyPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <FacultyDashboard />
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: ' <CreateAdmin />'
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: '<CreateStudent />'
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: '<CreateFaculty />'
            },
        ]
    }
]