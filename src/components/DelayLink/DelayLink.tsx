import { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

export const DelayLink = (props: {
  [x: string]: any;
  delay: any;
  onDelayStart: any;
  onDelayEnd: any;
  replace: any;
  to: any;
}) => {
  const { delay, onDelayStart, onDelayEnd, replace, to, ...rest } = props;
  let timeout: NodeJS.Timeout | null = null;
  let history = useNavigate();
  let location = useLocation();

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  const handleClick = (e: {
    defaultPrevented: any;
    preventDefault: () => void;
  }) => {
    // if trying to navigate to current page stop everything
    if (location?.pathname === to) return;

    onDelayStart(e, to);
    if (e.defaultPrevented) {
      return;
    }

    e.preventDefault();

    timeout = setTimeout(() => {
      if (replace) {
        history(to);
      } else {
        history(to);
      }
      onDelayEnd(e, to);
    }, delay);
  };

  return <Link {...rest} to={to} onClick={handleClick} />;
};
