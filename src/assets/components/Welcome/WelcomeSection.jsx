import React from "react";
import classes from "./WelcomeSection.module.css";
import { useTranslation } from "react-i18next";

const WelcomeSection = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <div className={classes["welcome-container"]}>
      <div className={classes["welcome-intro"]}>
        <h2>{t("welcomeSection_title")} </h2>
        <h3> {t("welcomeSection_subtitle")} </h3>
        <p>{t("welcomeSection_intro")}</p>
      </div>
    </div>
  );
};

export default WelcomeSection;
