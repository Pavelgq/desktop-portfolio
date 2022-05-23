import cn from "classnames";
import { useState, useRef, useLayoutEffect, UIEvent } from "react";
import { ScrollOpserverProps } from "./ScrollObserver.props"

export const ScrollObserver = ({currentScroll, setCurrentScroll, Component}: ScrollOpserverProps) => {
  const [scroll, setScroll] = useState<number | undefined>(0);

  const scrolledElement = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    if (currentScroll !== scroll) {
      scrolledElement?.current?.scroll(0, currentScroll);
    }
  }, [currentScroll]);

  const handleScroll = (e: UIEvent<HTMLElement>) => {
    setScroll(scrolledElement.current?.scrollTop);
    setCurrentScroll(scrolledElement.current?.scrollTop);
  };

  return (
    <div className={cn('scrollWrapper', "scrollSmooth")}
        ref={scrolledElement}
        onScroll={handleScroll}>
      <Component />
    </div>
  )
}