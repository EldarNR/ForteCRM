// libraries
import {type FC, useState} from "react";
import { Outlet } from "react-router-dom";
// components
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
// style
import styles from "./Layout.module.css";

const Layout: FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => setIsCollapsed((prev) => !prev);
    return (
        <div className={styles.layout}>
            <div className={styles.body}>
                <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />

                <div className={`${styles.main}`}>
                    <Header isCollapsed={isCollapsed} onToggleSidebar={toggleSidebar} />

                    <main className={styles.content}>
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;