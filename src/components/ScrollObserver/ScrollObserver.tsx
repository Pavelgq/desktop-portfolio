import cn from "classnames";
import React from "react";
import { useState, useRef, useLayoutEffect, UIEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ScrollOpserverProps } from "./ScrollObserver.props";

export const ScrollObserver = React.memo(
  ({
    currentScroll,
    setCurrentScroll,
    className,
    children,
    trigger,
    ...props
  }: ScrollOpserverProps) => {
    const [scroll, setScroll] = useState<number | undefined>(0);
    const dispatch = useDispatch();
    const scrolledElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setScroll(scrolledElement.current?.scrollTop);
      if (currentScroll !== scroll) {
        scrolledElement?.current?.scroll(0, currentScroll);
      }
    }, [currentScroll, trigger, scrolledElement.current?.scrollHeight]);

    const handleScroll = (e: UIEvent<HTMLElement>) => {
      setScroll(scrolledElement.current?.scrollTop);

      dispatch(setCurrentScroll(scrolledElement.current?.scrollTop));
    };

    return (
      <div
        className={cn("scrollWrapper", "scrollSmooth", className)}
        ref={scrolledElement}
        onScroll={handleScroll}
        {...props}
      >
        {children}
      </div>
    );
  }
);
