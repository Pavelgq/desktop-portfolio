import cn from "classnames";
import { useEffect, useRef, useState, UIEvent, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigationType } from "react-router-dom";
import { ImgTag, PdfSideBar, WorkPlaceItem } from "../../components";
import { HrTag } from "../../components/HrTag/HrTag";
import { HTag } from "../../components/HTag/HTag";
import { PdfSideBarAnchor } from "../../components/PdfSideBar/PdfSideBar.props";
import { ScrollObserver } from "../../components/ScrollObserver/ScrollObserver";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  loadingComplite,
  selectFrameScroll,
  selectMainLoading,
  setCurrentFrameScroll,
  setTargetWindowTitle,
} from "../../store/mainStore";
import { getAge } from "../../utils/calc-utils";
import { checkMobile } from "../../utils/dom-utils";
import styles from "./Resume.module.css";

export const ResumeWrapper = () => {
  const [windowX] = useWindowSize();
  const [anchors, setAnchors] = useState<PdfSideBarAnchor[]>();
  const location = useLocation();
  const dispatch = useDispatch();
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

  // useLayoutEffect(() => {
  //   // if (location.pathname.split("/").length <= 1) {
  //   //   return;
  //   // }
  //   if (currentScroll !== scroll) {
  //     scrolledElement?.current?.scroll(0, currentScroll);
  //   }
  // }, [anchors, currentScroll]);

  const handleScroll = (e: UIEvent<HTMLElement>) => {
    setScroll(scrolledElement.current?.scrollTop);
    dispatch(setCurrentFrameScroll(scrolledElement.current?.scrollTop));
  };

  return (
    <section className={styles.content}>
      {!checkMobile(windowX) ? <PdfSideBar anchors={anchors} /> : <></>}
      <ScrollObserver
        className={cn(styles.resume)}
        currentScroll={currentScroll}
        setCurrentScroll={setCurrentFrameScroll}
        trigger={anchors}
      >
        <Resume />
      </ScrollObserver>
      {/* <article
        className={cn(styles.resume, "scrollSmooth")}
        ref={scrolledElement}
        onScroll={handleScroll}
      >
        <Resume />
      </article> */}
    </section>
  );
};

export const ResumePrint = () => {
  const dispatch = useDispatch();
  const navType = useNavigationType();
  const mainLoading = useSelector(selectMainLoading);
  useEffect(() => {
    document.fonts.ready.then(function () {
      if (navType === "POP") {
        const loader = document.querySelector(".screen-loader");
        loader?.classList.add("hidden");
        dispatch(loadingComplite());
      }
    });
  }, []);
  useEffect(() => {
    if (!mainLoading)
      setTimeout(() => {
        window.print();
      }, 2000);
  }, [mainLoading]);
  return (
    <article className={styles.resumePreview}>
      <Resume />
    </article>
  );
};

export const ResumePreview = () => {
  const dispatch = useDispatch();
  const navType = useNavigationType();
  useEffect(() => {
    document.fonts.ready.then(function () {
      if (navType === "POP") {
        const loader = document.querySelector(".screen-loader");
        loader?.classList.add("hidden");
        dispatch(loadingComplite());
      }
    });
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
          width={160}
          height={262}
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
            <HTag tag="h3" id={"skils"} className={styles.title}>
              Навыки
            </HTag>
            <ul className={styles.list}>
              <li>HTML, CSS (LESS, SASS), </li>
              <li>Javascript (ES6+), Typescript,</li>
              <li>React JS (Hooks), Redux (+Saga),</li>
              <li>Canvas (PixiJS), WebSocket, </li>
              <li>Git, Webpack, Gulp,</li>
              <li>Node JS, Express JS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <HTag tag="h3" id={"about"} className={styles.title}>
          О себе
        </HTag>
        <p className={cn("paragraph", styles.paragraph)}>
          Фронтенд разработчик с бэкграундом инженера по автоматизации на пороге
          смены сферы профессиональной деятельности. Хочу найти работу в
          развивающейся it-компании и нацелен на долгосрочное сотрудничество.
        </p>
        <p className={cn("paragraph", styles.paragraph)}>
          За свою карьеру приобрел полезные навыки:
        </p>
        <ul className={styles.list}>
          <li>находить решение для любой задачи,</li>
          <li>серьезно относиться к архитектуре проекта,</li>
          <li>работать в команде и закрывать проекты в одиночку,</li>
          <li>
            думать на несколько шагов вперед и быть внимательным к мелочам,
          </li>
          <li>
            рационально выстраивать свое рабочее время, брать ответственность за
            свои решения,
          </li>
          <li>
            параллельно вести несколько проектов, переключаться при
            необходимости, понимать почему это плохо.
          </li>
        </ul>
      </div>
      <div>
        <HTag tag="h3" id={"experience"} className={styles.title}>
          Опыт работы
        </HTag>
        <ul className={styles.noPointList}>
          <WorkPlaceItem
            place={"АО “Завод Энергозащитных Устройств”, Санкт-Петербург"}
            role={"инженер"}
            interval={"СЕНТЯБРЬ 2015 – НАСТОЯЩЕЕ ВРЕМЯ"}
            info={
              <>
                <ul>
                  <li>
                    Разрабатывал линии автоматизации специфичных
                    производственных процессов
                  </li>
                  <li>Изучал и настраивал промышленное оборудование</li>
                  <li>
                    Программировал контроллеры (в основном на языках МЭК
                    61131-3), роботизированные узлы, станки с ЧПУ и другое
                  </li>
                  <li>
                    Корректировал чужой код, добавлял функционал в оборудование
                    приобретённые у сторонних организаций
                  </li>
                  <li>
                    Проектировал и корректировал документации, чертежи, схемы,
                    3d модели
                  </li>
                  <li>Обучал персонал</li>
                </ul>
              </>
            }
          />
          <WorkPlaceItem
            place={`Фриланс проект "ТЭК", Санкт-Петербург`}
            role={"frontend разработчик"}
            interval={"ДЕКАБРЬ 2018 – ОКТЯБРЬ 2019"}
            info={
              <>
                Совместно с кандидатом технических наук написал серию расчетных
                программ для решения проблем, связанных с расчетами при
                проектированием кабельных линий. Расчет экранов, расчет труб для
                прокладки кабеля и расчет самого кабеля.
                <ul>
                  <li>Использовал jQuery и ES5</li>
                  <li>Работал без опыта проектирования вэб-приложений</li>
                  <li>
                    Форма динамическая, количество участков кабельной линии
                    можно добавлять и они могут быть разные по параметрам
                  </li>
                  <li>
                    Расчет можно сохранить в файл и загрузить обратно в
                    программу
                  </li>
                </ul>
              </>
            }
          />
          <WorkPlaceItem
            place={`Фриланс проект "Speach-Therapy", Санкт-Петербург`}
            role={"Frontend разработчик"}
            interval={"СЕНТЯБРЬ 2020 – ЯНВАРЬ 2021"}
            info={
              <>
                Приложение логопеда для корректировки дислексии у детей. Состоит
                из личного кабинета преподователя, кабинета ученика, сервера и
                приложения с игровой механикой.
                <ul>
                  <li>
                    Авторизация пользователя с серверной генерацией JWT токена
                  </li>
                  <li>
                    Пять видов заданий собирающихся из входных данных с сервера
                  </li>
                  <li>
                    Генерация заданий в игровом виде на Canvas/WebGL с помощью
                    библиотеки Pixi.js
                  </li>
                  <li>Конструктор заданий на клиенте</li>
                  <li>Сбор статистики об успеваемости</li>
                </ul>
              </>
            }
          />
          <WorkPlaceItem
            place={`Фриланс проект "ТЭК Админ и ТЭК Сервер", Санкт-Петербург`}
            role={"Frontend разработчик"}
            interval={"НОЯБРЬ 2021 – НАСТОЯЩЕЕ ВРЕМЯ"}
            info={
              <>
                На клиенте: React, Redux(Saga), TypeScript, Material UI <br />
                На сервере: Express JS, Postgresql
                <ul>
                  <li>
                    Спроектировал и написал простой сервер с REST API на Express
                    JS (Сущности: сотрудник, клиент, действия клиентов, заявки,
                    ключи доступа)
                  </li>
                  <li>
                    Разработал программу для администрирования (Создание
                    пользователей, генерация ключей доступа к сервису, создание
                    новых сотрудников, анализ заявок на использование программ,
                    а также просмотр, анализ и выгрузка данных, созданных
                    пользователями)
                  </li>
                  <li>
                    Произвел рефакторинг расчетных программ с добавлением ключей
                    доступа, возможности отправлять заявки на получение ключа и
                    сохранение действий пользователей в базу
                  </li>
                </ul>
              </>
            }
          />
        </ul>
      </div>
      <div>
        <HTag tag="h3" id={"education"} className={styles.title}>
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
        <HTag tag="h3" id={"courses"} className={styles.title}>
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
        <HTag tag="h3" id={"additionally"} className={styles.title}>
          Дополнительно
        </HTag>
        <ul className={styles.list}>
          <li>Женат, две кошки</li>
          <li>
            Английский Pre-Intermediate. В работе не мешает, но помогает не так,
            как хотелось бы. Есть большое желание улучшить. Занимаюсь в
            свободное время
          </li>
          <li>Водительское удостоверение категории В</li>
        </ul>
      </div>
    </>
  );
};
