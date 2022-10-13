import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface ImgPreviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}