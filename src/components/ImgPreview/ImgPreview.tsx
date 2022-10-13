import { useState } from "react";
import { ImgPreviewProps } from "./ImgPreview.props";
import styles from "./ImgPreview.module.css";
import cn from "classnames";

export const ImgPreview = ({
  src,
  alt,
  width = 0,
  height = 0,
  className,
  ...props
}: ImgPreviewProps): JSX.Element => {
  const [status, setStatus] = useState<"ready" | "loading" | "error">(
    "loading"
  );

  const setStyle = () => {
    if (width === 0 || height === 0) {
      return {};
    }
    return {
      width: width,
      height: height,
    };
  };

  const handleImageLoaded = () => {
    setStatus("ready");
  };

  const handleImageErrored = () => {
    setStatus("error");
  };

  return (
    <div
      style={setStyle()}
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
