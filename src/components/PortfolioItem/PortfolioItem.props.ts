import { DetailedHTMLProps, HTMLAttributes } from "react";
import { PalletViewI } from "../../interfaces/common";
import { PortfolioItemI } from "../../interfaces/portfolio";


export interface PortfolioItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: PortfolioItemI;
  variant?: PalletViewI;
  handleClick?: (id:  number) => void;
}