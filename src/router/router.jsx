import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AdminLogin from "../pages/AdminLogin/AdminLogin";


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
        ]
    }

])

export default router;