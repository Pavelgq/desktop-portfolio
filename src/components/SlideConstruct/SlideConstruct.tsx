import { Children, useEffect, useState, TouchEvent } from "react";
import { SlideConstructProps } from "./SlideConstruct.props";

import styles from "./SlideConstruct.module.css";
import cn from "classnames";
import { globalConfig } from "../../config";
import { checkMobile } from "../../utils/dom-utils";
import { useWindowSize } from "../../hooks/useWindowSize";

export const SlideConstruct = ({ children }: SlideConstructProps) => {
  const [windowX] = useWindowSize();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(Children.count(children));
  const [touchPosition, setTouchPosition] = useState(0);

  useEffect(() => {
    setLength(Children.count(children));
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition;

    if (!touchDown) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    console.log(diff);
    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(0);
  };

  if (!checkMobile(windowX)) {
    return <>{children}</>;
  }

  return (
    <div
      className={styles.contentWrapper}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className={styles.content}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children}
      </div>

      <div className={styles.dotesList}>
        {Children.map(children, (child, i) => {
          return (
            <span
              key={i}
              className={cn(styles.dot, {
                [styles.activeDot]: i === currentIndex,
              })}
            ></span>
          );
        })}
      </div>
    </div>
  );
};
