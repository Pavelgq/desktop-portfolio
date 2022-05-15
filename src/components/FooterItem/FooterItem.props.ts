import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FooterItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  title: string;
  path: string;
  isOuterLink?: boolean;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}