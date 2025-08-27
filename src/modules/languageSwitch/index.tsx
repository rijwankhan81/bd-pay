import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import styles from "./Switch.module.scss";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    router.push(router.asPath, router.asPath, {
      locale: lang,
      scroll: false,
    });
  };

  return (
    <div className={styles.languageSwitcher}>
      <span
        className={`${styles.langTag} ${
          i18n.language === "en" ? styles.active : ""
        }`}
        onClick={() => handleLanguageChange("en")}
      >
        EN
      </span>
      <span
        className={`${styles.langTag} ${
          i18n.language === "bn" ? styles.active : ""
        }`}
        onClick={() => handleLanguageChange("bn")}
      >
        বাংলা
      </span>
    </div>
  );
};

export default LanguageSwitcher;
