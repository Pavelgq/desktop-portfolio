import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigationType } from "react-router-dom";
import { PdfSideBar } from "../../components";
import { PdfSideBarAnchor } from "../../components/PdfSideBar/PdfSideBar.props";
import { ScrollObserver } from "../../components/ScrollObserver/ScrollObserver";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  loadingComplite,
  selectFrameScroll,
  selectLocale,
  selectLocaleResume,
  selectMainLoading,
  setCurrentFrameScroll,
  setTargetWindowTitle,
} from "../../store/mainStore";
import { checkMobile } from "../../utils/dom-utils";
import { ResumeEN } from "./locale/ResumeEN";
import { ResumeRU } from "./locale/ResumeRU";
import styles from "./Resume.module.css";

export const ResumeWrapper = () => {
  const [windowX] = useWindowSize();
  const [anchors, setAnchors] = useState<PdfSideBarAnchor[]>();
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState<number | undefined>(0);
  const currentScroll = useSelector(selectFrameScroll);
  const locale = useSelector(selectLocaleResume);
  const scrolledElement = useRef<HTMLElement>(null);

  useEffect(() => {
    // if (location.pathname.split("/").length <= 1) {
    //   return;
    // }

    dispatch(setTargetWindowTitle(locale.title));
    setAnchors([
      {
        id: 0,
        name: locale.anchor["skils"],
        anchor: "skils",
      },
      {
        id: 1,
        name: locale.anchor["about"],
        anchor: "about",
      },

      {
        id: 2,
        name: locale.anchor["experience"],
        anchor: "experience",
      },
      {
        id: 3,
        name: locale.anchor["education"],
        anchor: "education",
      },
      {
        id: 4,
        name: locale.anchor["courses"],
        anchor: "courses",
      },
      {
        id: 5,
        name: locale.anchor["additionally"],
        anchor: "additionally",
      },
    ]);
  }, []);

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
  const locale = useSelector(selectLocale);
  switch (locale) {
    case "ru":
      return <ResumeRU />;
    case "eng":
      return <ResumeEN />;
    default:
      return <ResumeRU />;
  }
};
