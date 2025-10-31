// libraries
import { type FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Box, Grid2x2, CircleUserRound, ChevronDown, X } from "lucide-react";
import { useTranslation } from "react-i18next";
// components
import Logo from "./Logo";
// config
import { MOCK_PROJECTS } from "../../pages/projects/config.ts";
// style
import styles from "./Sidebar.module.css";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const { t } = useTranslation();
  const [openProjects, setOpenProjects] = useState(false);

  const toggleProjects = () => setOpenProjects((prev) => !prev);

  return (
      <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
          </div>
          <button className={styles.burger} aria-label="Toggle menu" onClick={onToggle}>
            <X size={28} />
          </button>
        </div>

        <nav className={styles.nav}>
          <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
              }
          >
            <Home size={20} className={styles.icon} />
            <span className={styles.text}>{t("nav.home")}</span>
          </NavLink>

          <NavLink
              to="/requests"
              className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
              }
          >
            <Box size={20} className={styles.icon} />
            <span className={styles.text}>{t("nav.requests")}</span>
          </NavLink>

          <div className={styles.group}>
            <button
                className={styles.link}
                onClick={toggleProjects}
            >
              <Grid2x2 size={20} className={styles.icon} />
              <span className={styles.text}>{t("nav.projects")}</span>
              <ChevronDown
                  size={18}
                  className={`${styles.tail} ${openProjects ? styles.rotated : ""}`}
              />
            </button>

            {openProjects && (
                <div className={styles.submenu}>
                  <NavLink
                      to={`/projects`}
                      className={({ isActive }) =>
                          `${styles.subLink} ${isActive ? styles.activeSub : ""}`
                      }
                  >
                    {t('all')}
                  </NavLink>
                  {MOCK_PROJECTS.map((p) => (
                      <NavLink
                          key={p.id}
                          to={`/projects/${p.id}`}
                          className={({ isActive }) =>
                              `${styles.subLink} ${isActive ? styles.activeSub : ""}`
                          }
                      >
                        {p.name}
                      </NavLink>
                  ))}
                </div>
            )}
          </div>

          <NavLink
              to="/profile"
              className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
              }
          >
            <CircleUserRound size={20} className={styles.icon} />
            <span className={styles.text}>{t("nav.profile")}</span>
          </NavLink>
        </nav>
      </div>
  );
};

export default Sidebar;