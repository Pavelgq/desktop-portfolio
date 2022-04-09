import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { HrTag } from "../../components/HrTag/HrTag";
import { HTag } from "../../components/HTag/HTag";
import { SideBarAnchor } from "../../components/SideBar/SideBar.props";
import { setTargetWindowTitle } from "../../store/mainStore";
import styles from "./Resume.module.css";

interface ContextI {
  anchors: SideBarAnchor[];
  setAnchors: React.Dispatch<React.SetStateAction<SideBarAnchor[] | undefined>>;
}

export const Resume = () => {
  const dispatch = useDispatch();

  const { anchors, setAnchors } = useOutletContext<ContextI>();

  useEffect(() => {
    dispatch(setTargetWindowTitle("Резюме_Гордеев.pdf"));
    setAnchors([
      {
        id: 0,
        name: "О себе",
        anchor: "about",
      },
      {
        id: 1,
        name: "Навыки",
        anchor: "skils",
      },
      {
        id: 2,
        name: "Опыт работы",
        anchor: "experience",
      },
      {
        id: 3,
        name: "Образование",
        anchor: "education",
      },
      {
        id: 4,
        name: "Курсы",
        anchor: "courses",
      },
    ]);
  }, []);

  return (
    <>
      {/* <h2>Резюме</h2> */}
      <article className={styles.resume}>
        <div>
          <HTag tag="h2">Гордеев Павел</HTag>
          <HrTag thickness="medium" className={styles.line} />
          <span>FRONTEND РАЗРАБОТЧИК</span>
        </div>
        <div className={styles.about}>
          <HTag tag="h3">
            <a id={"about"} href="#about">
              О себе
            </a>
          </HTag>
          <p className="paragraph">
            Фронтенд разработчик с бэкграундом инженера по автоматизации на
            пороге смены сферы профессиональной деятельности. Хочу найти работу
            в развивающейся it-компании и нацелен на долгосрочное
            сотрудничество.
          </p>
          <p className="paragraph">За свою карьеру приобрел полезные навыки:</p>
          <ul>
            <li>находить решение для любой задачи,</li>
            <li>серьезно относится к архитектуре проекта,</li>
            <li>работать в команде и закрывать проекты в одиночку,</li>
            <li>
              думать на несколько шагов наперед и быть внимательным к мелочам,{" "}
            </li>
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
          <HTag tag="h3">
            <a id={"skils"} href="#skils">
              Навыки
            </a>
          </HTag>
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
    </>
  );
};
