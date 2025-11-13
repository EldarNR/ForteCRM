// libraries
import { type FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// style
import styles from "./RequestsListPage.module.css";
// config
import { NEW_REQUESTS_ITEMS, REJECTED_REQUESTS_ITEMS, STATUS_INITIAL } from "./config.ts";

const AllRequestsPage: FC = () => {
    const [activeTab, setActiveTab] = useState(STATUS_INITIAL);
    const [searchQuery, setSearchQuery] = useState("");
    const { t } = useTranslation();
    const navigate = useNavigate();

    const currentRequests =
        activeTab === STATUS_INITIAL ? NEW_REQUESTS_ITEMS : REJECTED_REQUESTS_ITEMS;

    const filteredRequests = currentRequests.filter(
        (req) =>
            req.id.includes(searchQuery) ||
            req.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            req.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCardClick = (id: string) => {
        navigate(`/requests/${id}`);
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${
                            activeTab === "new" ? styles.active : ""
                        }`}
                        onClick={() => setActiveTab("new")}
                        type="button"
                    >
                        {t("allRequests.newRequests")}
                    </button>
                    <button
                        className={`${styles.tab} ${
                            activeTab === "rejected" ? styles.active : ""
                        }`}
                        onClick={() => setActiveTab("rejected")}
                        type="button"
                    >
                        {t("allRequests.rejectedRequests")}
                    </button>
                </div>

                <div className={styles.searchBar}>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder={t("allRequests.search")}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className={styles.requestsList}>
                    {filteredRequests.length === 0 ? (
                        <div className={styles.emptyState}>
                            {t("allRequests.emptyState")}
                        </div>
                    ) : (
                        filteredRequests.map((request) => (
                            <div
                                key={request.id}
                                className={styles.requestCard}
                                onClick={() => handleCardClick(request.id)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className={styles.requestHeader}>
                                    <span className={styles.requestId}>№{request.id}</span>
                                    <span className={styles.requestName}>{request.name}</span>
                                </div>
                                <div className={styles.requestBody}>
                                    <p className={styles.requestText}>{request.text}</p>
                                    <span className={styles.requestDate}>{request.date}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllRequestsPage;
