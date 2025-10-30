// libraries
import { type FC, useState } from "react";
import { useTranslation } from "react-i18next";
// style
import styles from "./Header.module.css";
// icon
import { SearchIcon } from "lucide-react";

const Search: FC = () => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  return (
      <div
          className={`${styles.search} ${expanded ? styles.expanded : ""}`}
          onFocus={() => setExpanded(true)}
          onBlur={() => setExpanded(false)}
      >
        <button className={styles.searchBtn} type="button" aria-label={t("search.label")}>
          <SearchIcon size={18} />
        </button>

        <input
            className={styles.searchInput}
            placeholder={t("search.placeholder")}
            type="text"
        />
      </div>
  );
};

export default Search;
