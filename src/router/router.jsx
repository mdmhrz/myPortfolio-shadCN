import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import ProjectDetails from "../pages/Home/Projects/ProjectDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'auth/admin-login',
                element: <AdminLogin />
            },
            {
                path: 'project/:id',
                loader: () => fetch('/projects.json'),
                element: <ProjectDetails />
            },
        ]
    },
    {
        path: '/*',
        element: <p>Error.......</p>
    }

])

export default router;