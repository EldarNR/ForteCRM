// libraries
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
// helpers
import {logout} from "./../../helpers/auth.ts";
import styles from "./Header.module.css";
import {useTranslation} from "react-i18next";

const UserAvatar: FC = () => {
    const { t } = useTranslation();
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
        {t("nav.logout")}
    </button>
  );
};

export default UserAvatar;
