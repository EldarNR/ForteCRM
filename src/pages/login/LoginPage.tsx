// libraries
import {type FC, type FormEvent, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
// helpers
import { fakeLogin } from "./../../helpers/auth";
// style
import styles from "./LoginPage.module.css";

const LoginPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await fakeLogin({ login, password, remember });
      const to = location.state?.from?.pathname || "/dashboard";
      navigate(to, { replace: true });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || t("login.error"));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t("login.title")}</h2>
          <p className={styles.welcome}>{t("login.welcome")}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label}>{t("login.login")}</label>
            <input
              type="text"
              className={styles.input}
              placeholder={t("login.login")}
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>{t("login.password")}</label>
            <input
              type="password"
              className={styles.input}
              placeholder={t("login.passwordPlaceholder")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.options}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span>{t("login.remember")}</span>
            </label>
            <button
              type="button"
              className={styles.forgotPassword}
              onClick={() => alert(t("login.recoverStub"))}
            >
              {t("login.recover")}
            </button>
          </div>

          {error && (
            <div className={styles.errorMessage}>{error}</div>
          )}

          <button
            type="submit"
            className={styles.loginButton}
            disabled={loading}
          >
            {loading ? t("login.loading") : t("login.submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
