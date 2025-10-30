// libraries
import {type FC, useMemo} from "react";
import LanguageSwitcher from "./../language/LanguageSwitcher";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
// style
import styles from "./Header.module.css";
// components
import Search from "./Search";
import UserAvatar from "./UserAvatar";


const Header: FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  
  const titleKey = useMemo(() => {
    if (pathname.startsWith("/requests")) return "nav.requests";
    if (pathname.startsWith("/projects"))     return "nav.projects";
    if (pathname.startsWith("/profile"))      return "nav.profile";
    if (pathname.startsWith("/dashboard"))    return "nav.home";
    return ""; 
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {titleKey && <h1 className={styles.title}>{t(titleKey)}</h1>}
      </div>

      
      <div className={styles.right}>
        <Search />
        <LanguageSwitcher />
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;