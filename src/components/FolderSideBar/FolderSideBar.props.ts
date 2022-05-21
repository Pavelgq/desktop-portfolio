import { DetailedHTMLProps, HTMLAttributes } from "react";
import { PortfolioItemI } from "../../interfaces/portfolio";


export interface FolderSideBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  data: PortfolioItemI | undefined;
}