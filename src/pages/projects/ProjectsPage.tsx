// libraries
import type {FC} from "react";
import { useTranslation } from "react-i18next";
// style
import styles from "./ProjectsPage.module.css";
// config
import {MOCK_PROJECTS} from "./config.ts";

const ProjectsPage:FC = () => {
  const { t } = useTranslation();

  return (
      <div className={styles.page}>
        <h2 className={styles.title}>{t("projects.title")}</h2>
        <div className={styles.grid}>
          {MOCK_PROJECTS.map((p) => (
              <div key={p.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>{p.name}</h3>
                  <span
                      className={`${styles.badge} ${
                          p.status === "done"
                              ? styles.done
                              : p.status === "inProgress"
                                  ? styles.inProgress
                                  : styles.testing
                      }`}
                  >
                {t(`projects.status.${p.status}`)}
              </span>
                </div>

                <p className={styles.desc}>{p.description}</p>

                <div className={styles.footer}>
              <span className={styles.deadline}>
                {t("projects.deadline")}: {p.deadline}
              </span>
                  <button className={styles.btn}>{t("projects.details")}</button>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default ProjectsPage;
