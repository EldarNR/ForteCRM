// libraries
import type {FC} from "react";
import { Outlet } from "react-router-dom";
// components
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
// style
import styles from "./Layout.module.css";

const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.body}>
        <Sidebar />

        <div className={styles.main}>
          <Header />
        
          <main className={styles.content}>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;