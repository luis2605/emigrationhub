import React from "react";
import classes from "./Hero.module.css";

import { useTranslation } from "react-i18next";

//assets
import hero1 from "../../img/avatarHeros/hero1.svg";
import hero2 from "../../img/avatarHeros/hero2.svg";
import hero3 from "../../img/avatarHeros/hero3.svg";
import hero4 from "../../img/avatarHeros/hero4.svg";
function Hero() {
  const { t } = useTranslation();
  return (
    <div className={classes["hero-container"]}>
      <img src={hero1} className={classes["hero-img-1"]} />
      <img src={hero2} className={classes["hero-img-2"]} />
      <img src={hero3} className={classes["hero-img-3"]} />
      <img src={hero4} className={classes["hero-img-4"]} />
      <div className={classes["em-definition"]}>
        <h2>{t("definition")}</h2>
        <h3>{t("phonetics")}</h3>
        <p> {t("description")}</p>
      </div>
    </div>
  );
}

export default Hero;
