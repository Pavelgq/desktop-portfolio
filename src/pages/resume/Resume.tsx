import { useEffect, useRef, useState, UIEvent, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useOutletContext } from "react-router-dom";
import { ImgTag, WorkPlaceItem } from "../../components";
import { HrTag } from "../../components/HrTag/HrTag";
import { HTag } from "../../components/HTag/HTag";
import { PdfSideBarAnchor } from "../../components/PdfSideBar/PdfSideBar.props";
import {
  selectFrameScroll,
  setCurrentFrameScroll,
  setTargetWindowTitle,
} from "../../store/mainStore";
import { getAge } from "../../utils/calc-utils";
import styles from "./Resume.module.css";

interface ContextAnchorI {
  anchors: PdfSideBarAnchor[];
  setAnchors: React.Dispatch<
    React.SetStateAction<PdfSideBarAnchor[] | undefined>
  >;
}

export const ResumeWrapper = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { anchors, setAnchors } = useOutletContext<ContextAnchorI>();
  const [scroll, setScroll] = useState<number | undefined>(0);
  const currentScroll = useSelector(selectFrameScroll);

  const scrolledElement = useRef<HTMLElement>(null);

  useEffect(() => {
    // if (location.pathname.split("/").length <= 1) {
    //   return;
    // }
    dispatch(setTargetWindowTitle("Резюме_Гордеев.pdf"));
    setAnchors([
      {
        id: 0,
        name: "Навыки",
        anchor: "skils",
      },
      {
        id: 1,
        name: "О себе",
        anchor: "about",
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
      {
        id: 5,
        name: "Дополнительно",
        anchor: "additionally",
      },
    ]);
  }, []);

  useLayoutEffect(() => {
    // if (location.pathname.split("/").length <= 1) {
    //   return;
    // }
    if (currentScroll !== scroll) {
      scrolledElement?.current?.scroll(0, currentScroll);
    }
  }, [anchors]);

  const handleScroll = (e: UIEvent<HTMLElement>) => {
    setScroll(scrolledElement.current?.scrollTop);
    dispatch(setCurrentFrameScroll(scrolledElement.current?.scrollTop));
  };

  return (
    <article
      className={styles.resume}
      ref={scrolledElement}
      onScroll={handleScroll}
    >
      <Resume />
    </article>
  );
};

export const ResumePreview = () => {
  useEffect(() => {
    window.print();
  }, []);
  return (
    <article className={styles.resumePreview}>
      <Resume />
    </article>
  );
};

export const Resume = () => {
  return (
    <>
      <div className={styles.title}>
        <HTag tag="h2">Гордеев Павел</HTag>
        <HrTag thickness="medium" className={styles.line} />
        <span>FRONTEND РАЗРАБОТЧИК</span>
      </div>
      <div className={styles.mainInfo}>
        <ImgTag
          className={styles.avatar}
          src="/img/avatar-min.jpg"
          alt="Фотография автора"
        />
        <div>
          <ul className={styles.noPointList}>
            <li className={styles.item}>
              <span className={styles.itemCategory}>Город: </span>
              <span className={styles.itemValue}>Санкт-Петербург</span>
            </li>
            <li className={styles.item}>
              <span className={styles.itemCategory}>Метро: </span>
              <span className={styles.itemValue}>Лесная</span>
            </li>
            <li className={styles.item}>
              <span className={styles.itemCategory}>Дата рождения: </span>
              <span className={styles.itemValue}>
                06.12.1991 ({getAge(new Date(1991, 12, 6))})
              </span>
            </li>
          </ul>
          <div>
            <HTag tag="h3" id={"skils"}>
              Навыки
            </HTag>
            <ul className={styles.list}>
              <li>HTML, CSS, Javascript (Typescript),</li>
              <li>React JS, Redux(+Saga),</li>
              <li>Git, Webpack, Gulp,</li>
              <li>Node JS, Express JS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <HTag tag="h3" id={"about"}>
          О себе
        </HTag>
        <p className="paragraph">
          Фронтенд разработчик с бэкграундом инженера по автоматизации на пороге
          смены сферы профессиональной деятельности. Хочу найти работу в
          развивающейся it-компании и нацелен на долгосрочное сотрудничество.
        </p>
        <p className="paragraph">За свою карьеру приобрел полезные навыки:</p>
        <ul>
          <li>находить решение для любой задачи,</li>
          <li>серьезно относится к архитектуре проекта,</li>
          <li>работать в команде и закрывать проекты в одиночку,</li>
          <li>
            думать на несколько шагов вперед и быть внимательным к мелочам,
          </li>
          <li>
            рационально выстраивать свое рабочее время, брать ответственность за
            свои решения,
          </li>
          <li>
            параллельно вести несколько проектов и переключатся при
            необходимости, но теряюсь когда их больше пяти
          </li>
        </ul>
      </div>
      <div>
        <HTag tag="h3" id={"skils"}>
          Навыки
        </HTag>
        <ul className={styles.list}>
          <li>HTML, CSS, Javascript (Typescript),</li>
          <li>React JS, Redux(+Saga),</li>
          <li>Git, Webpack, Gulp,</li>
          <li>Node JS, Express JS</li>
        </ul>
      </div>
      <div>
        <HTag tag="h3" id={"experience"}>
          Опыт работы
        </HTag>
        <ul className={styles.placeList}>
          <WorkPlaceItem
            place={"АО “Завод Энергозащитных Устройств”, Санкт-Петербург"}
            role={"инженер"}
            interval={"СЕНТЯБРЬ 2015 – НАСТОЯЩЕЕ ВРЕМЯ"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`Фриланс проект "ТЭК", Санкт-Петербург`}
            role={"frontend разработчик"}
            interval={"ДЕКАБРЬ 2018 – ОКТЯБРЬ 2019"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`Фриланс проект "Speach-Therapy", Санкт-Петербург`}
            role={"Frontend разработчик"}
            interval={"СЕНТЯБРЬ 2020 – ЯНВАРЬ 2021"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`Фриланс проект "ТЭК Админ и ТЭК Сервер", Санкт-Петербург`}
            role={"Frontend разработчик"}
            interval={"НОЯБРЬ 2021 – НАСТОЯЩЕЕ ВРЕМЯ"}
            info={<></>}
          />
        </ul>
      </div>
      <div>
        <HTag tag="h3" id={"education"}>
          Образование
        </HTag>
        <ul className={styles.placeList}>
          <WorkPlaceItem
            place={
              "СПб НИУ ИТМО (Информационных Технологий, Механики и Оптики), Санкт-Петербург"
            }
            role={"бакалавр"}
            interval={"СЕНТЯБРЬ 2011 – ИЮНЬ 2015"}
            info={<></>}
          />
        </ul>
      </div>
      <div>
        <HTag tag="h3" id={"courses"}>
          Курсы
        </HTag>
        <ul className={styles.placeList}>
          <WorkPlaceItem
            place={`HTML Academy`}
            role={"HTML и CSS. Профессиональная вёрстка сайтов"}
            interval={"Завершен: ФЕВРАЛЬ 2020"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`HTML Academy`}
            role={"HTML и CSS. Адаптивная вёрстка и автоматизация"}
            interval={"Завершен: АПРЕЛЬ 2020"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`Loftschool`}
            role={"Комплексное обучение JavaScript"}
            interval={"Завершен: ИЮНЬ 2020"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`HTML Academy`}
            role={"Node.js. Разработка серверов приложений и API"}
            interval={"Завершен: СЕНТЯБРЬ 2020"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`UDEMY`}
            role={"React + Redux - Профессиональная Разработка"}
            interval={"Завершен: МАРТ 2021"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`UDEMY`}
            role={"React + Next.js - с нуля. TypeScript, Hooks, SSR и CSS Grid"}
            interval={"Завершен: НОЯБРЬ 2021"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`Hexlet`}
            role={"JS: Redux (React)"}
            interval={"Завершен: НОЯБРЬ 2021"}
            info={<></>}
          />
        </ul>
      </div>
      <div>
        <HTag tag="h3" id={"additionally"}>
          Дополнительно
        </HTag>
        <ul className={styles.list}>
          <li>Женат, две кошки. </li>
          <li>
            Английский Pre-Intermediate. В работе не мешает, но помогает не так,
            как хотелось бы. Есть большое желание улучшить. Пытаюсь заниматься в
            свободное время.
          </li>
          <li>
            Водительское удостоверение категории В. Один раз уже менял из-за
            завершения срока действия.
          </li>
          <li>
            Из хобби в голову приходит только программирование. Этот сайт, к
            примеру, похож на хобби.
          </li>
        </ul>
      </div>
    </>
  );
};
