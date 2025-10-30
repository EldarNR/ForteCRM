// libraries
import type{FC,ReactNode} from "react";
// components
import AuthHeader from "./../authheader/AuthHeader.tsx";
// style
import styles from "./AuthLayout.module.css";

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.shell}>
      <AuthHeader />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default AuthLayout;
