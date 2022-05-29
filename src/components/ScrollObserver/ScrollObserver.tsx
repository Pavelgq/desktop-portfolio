import cn from "classnames";
import React from "react";
import { useState, useRef, useLayoutEffect, UIEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ScrollOpserverProps } from "./ScrollObserver.props"

export const ScrollObserver = React.memo(({currentScroll, setCurrentScroll, className, children, trigger}: ScrollOpserverProps) => {
  const [scroll, setScroll] = useState<number | undefined>(0);
  const dispatch = useDispatch();
  const scrolledElement = useRef<HTMLDivElement>(null);
  console.log(scrolledElement.current, scrolledElement.current?.scrollTop)

  const [maxScroll, setMaxScroll] = useState<number | undefined>(0);
  const handleRect = useCallback((node) => {
    setMaxScroll(scrolledElement?.current?.scrollHeight);
  }, []);

  useEffect(() => {
    console.log('effect', scrolledElement.current?.scrollHeight)
    setScroll(scrolledElement.current?.scrollTop);
    if (currentScroll !== scroll) {
      scrolledElement?.current?.scroll(0, currentScroll);
    }

  }, [currentScroll, trigger]);

  const handleScroll = (e: UIEvent<HTMLElement>) => {
    setScroll(scrolledElement.current?.scrollTop);
  
    dispatch(setCurrentScroll(scrolledElement.current?.scrollTop));
  };

  return (
    <div className={cn('scrollWrapper', "scrollSmooth", className)}
        ref={scrolledElement}
        onScroll={handleScroll}>
      {children}
    </div>
  )
})