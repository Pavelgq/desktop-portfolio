import { DetailedHTMLProps, HTMLAttributes } from "react";
import { PortfolioItemI } from "../../interfaces/portfolio";


export interface PortfolioItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: PortfolioItemI;
  variant?: 'table' | 'tile';
}