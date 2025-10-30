// libraries
import type { FC } from "react";
import { useTranslation } from "react-i18next";
// style
import styles from "./ProfilePage.module.css";
// images
import UserAvatarImg from "./../../assets/images/picture/UserAvatar.png";
// config
import { USER } from "./config.ts";

const ProfilePage: FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.profile}>
            <div className={styles.card}>
                <img
                    src={UserAvatarImg}
                    alt="Avatar"
                    className={styles.avatar}
                />
                <h2>{USER.name}</h2>
                <p className={styles.role}>{t(`profile.role.${USER.role}`)}</p>

                <div className={styles.info}>
                    <p><strong>{t("profile.email")}:</strong> {USER.email}</p>
                    <p><strong>{t("profile.phone")}:</strong> {USER.phone}</p>
                    <p><strong>{t("profile.joined")}:</strong> {USER.joined}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
