import StudentDashboard from "../Pages/student/StudentDashboard";

export const studentPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <StudentDashboard />
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: '<CreateAdmin />'
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