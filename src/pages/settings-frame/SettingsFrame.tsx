import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HTag } from "../../components";
import { LanguageItem } from "../../components/LanguageItem/LanguageItem";
import { localizationI } from "../../localization/localization";
import {
  changeLocale,
  selectLocale,
  selectLocaleSetting,
  setTargetWindowTitle,
} from "../../store/mainStore";
import styles from "./SettingsFrame.module.css";

export const SettingsFrame = () => {
  const dispatch = useDispatch();
  const locale = useSelector(selectLocaleSetting);
  const language = useSelector(selectLocale);

  useEffect(() => {
    dispatch(setTargetWindowTitle(locale.title));
  }, [locale.title]);

  const handleChangeLocale = (locale: keyof localizationI) => {
    dispatch(changeLocale(locale));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.group}>
          <HTag tag="h3" id={locale.language.title} className={styles.title}>
            {locale.language.title}
          </HTag>
          <div className={styles.options}>
            <LanguageItem
              imgPath={"/img/russia.png"}
              title={locale.language.items[0]}
              active={language === "ru"}
              onClick={() => handleChangeLocale("ru")}
            />
            <LanguageItem
              imgPath={"/img/united-kingdom.png"}
              title={locale.language.items[1]}
              active={language === "eng"}
              onClick={() => handleChangeLocale("eng")}
            />
          </div>
        </div>
      </div>
    </>
  );
};
