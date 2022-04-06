import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HrTag } from "../../components/HrTag/HrTag";
import { HTag } from "../../components/HTag/HTag";
import { setTargetWindowTitle } from "../../store/mainStore";
import styles from "./Resume.module.css";

export const Resume = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTargetWindowTitle("Резюме_Гордеев.pdf"));
  }, []);

  return (
    <div>
      {/* <h2>Резюме</h2> */}
      <section>
        <article className={styles.resume}>
          <div>
            <HTag tag="h2">Гордеев Павел</HTag>
            <HrTag thickness="medium" className={styles.line} />
            <span>FRONTEND РАЗРАБОТЧИК</span>
          </div>
          <div className={styles.about}>
            <HTag tag="h3">О себе</HTag>
            <p className="paragraph">
              Фронтенд разработчик с бэкграундом инженера на пороге смены сферы
              профессиональной деятельности. Хочу найти работу в развивающейся
              it-компании и нацелен на долгосрочное сотрудничество. За свою
              карьеру приобрел полезные навыки:
            </p>
            <ul>
              <li>находить решение в любой задаче,</li>
              <li>
                работать, как в команде, так и закрывать проекты в одиночку,
              </li>
              <li>думать наперед и быть внимательным к мелочам, </li>
              <li>
                выстраивать свое рабочее время, брать ответственность за свои
                решения,
              </li>
              <li>
                параллельно вести несколько проектов и переключатся при
                необходимости
              </li>
            </ul>
          </div>
          <div>
            <HTag tag="h3">Навыки</HTag>
            <ul className={styles.list}>
              <li>HTML, CSS, Javascript (Typescript),</li>
              <li>React JS, Redux(+Saga),</li>
              <li>Git, Webpack, Gulp,</li>
              <li>Node JS, Express JS</li>
            </ul>
          </div>
          <div>
            <HTag tag="h3">Опыт работы</HTag>
            <p></p>
          </div>
          <div>
            <HTag tag="h3">Образование</HTag>
            <p></p>
          </div>
          <div>
            <HTag tag="h3">Курсы</HTag>
            <p></p>
          </div>
        </article>
      </section>
    </div>
  );
};
