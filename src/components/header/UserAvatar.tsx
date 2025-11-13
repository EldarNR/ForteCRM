// libraries
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
// helpers
import {logout} from "./../../helpers/auth.ts";
import styles from "./Header.module.css";

const UserAvatar: FC = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      title="Выйти"
      className={styles.btnLogOut}
    >
        <LogOut/>
    </button>
  );
};

export default UserAvatar;
