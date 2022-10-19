
import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface LanguageItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  imgPath: string,
  title: string,
  active?: boolean
}