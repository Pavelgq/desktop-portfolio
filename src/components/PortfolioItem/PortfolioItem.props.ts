import { PortfolioItemI } from "../../interfaces/portfolio";


export interface PortfolioItemProps {
  item: PortfolioItemI;
  variant?: 'table' | 'tile';
}