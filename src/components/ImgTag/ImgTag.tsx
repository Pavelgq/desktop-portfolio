import { useState } from "react";
import { ImgTagProps } from "./ImgTag.props";
import styles from "./ImgTag.module.css";
import cn from "classnames";

export const ImgTag = ({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: ImgTagProps): JSX.Element => {
  const [status, setStatus] = useState<"ready" | "loading" | "error">(
    "loading"
  );

  const handleImageLoaded = () => {
    setStatus("ready");
  };

  const handleImageErrored = () => {
    setStatus("error");
  };

  return (
    <div
      style={{ maxWidth: width, maxHeight: height }}
      className={cn(styles.wrapper, className, {
        [styles.skelet]: status === "loading",
        [styles.error]: status === "error",
      })}
    >
      <div className={styles.screen}></div>
      <img
        className={styles.image}
        src={src}
        alt={alt}
        onLoad={handleImageLoaded}
        onError={handleImageErrored}
        {...props}
      />
    </div>
  );
};
