import { Outlet } from "react-router-dom";
import Sidebar from "./Dashboard-Components/SideBar/Sidebar";
import { Box } from "theme-ui";

const AdminLayout = () => {
    return (
        <Box backgroundColor={'#f9f7f7'}>
            {/* Shared UI elements */}
            <Sidebar />
            <main>
                {/* Render the nested admin routes */}
                <Outlet />
            </main>
        </Box>
    );
};


export default AdminLayout;