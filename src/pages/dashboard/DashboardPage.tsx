// libraries
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
// components
import Card from "../../components/ui/card/Card";
// style
import styles from "./DashboardPage.module.css";
// config
import {ITEMS} from "./config.ts";


const DashboardPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <div className={styles.title}>{t("dashboard.category")}</div>
          <button className={styles.expandBtn} type="button" aria-disabled="true">
            <Maximize2 size={16} />
            <span>{t("dashboard.expand")}</span>
          </button>
        </div>

        
        <button 
          className={`${styles.railBtn} ${styles.left}`} 
          type="button" aria-hidden="true">
          <ChevronLeft size={18} />
        </button>
        <button 
          className={`${styles.railBtn} ${styles.right}`} 
          type="button" aria-hidden="true">
          <ChevronRight size={18} />
        </button>


        <div className={styles.grid}>
          {ITEMS.map((name) => (
            <Card key={name} className={styles.tile}>
              <div className={styles.tileHeader}>
                <span className={styles.tileTitle}>{name}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;