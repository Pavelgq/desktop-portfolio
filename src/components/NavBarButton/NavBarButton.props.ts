import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface NavBarButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  active?: boolean; 
}