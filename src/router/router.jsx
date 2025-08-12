import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import ProjectDetails from "../pages/Home/Projects/ProjectDetails";


const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: 'auth/admin-login',
                Component: AdminLogin
            },
            {
                path: 'project/:id',
                loader: () => fetch('/projects.json'),
                Component: ProjectDetails
            },
        ]
    },
    {
        path: '/*',
        element: <p>Error.......</p>
    }

])

export default router;