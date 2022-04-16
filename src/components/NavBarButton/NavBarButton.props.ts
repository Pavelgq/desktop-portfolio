import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface NavBarButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>;
  action: () => {};
}