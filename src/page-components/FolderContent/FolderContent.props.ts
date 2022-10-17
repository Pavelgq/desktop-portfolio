import { PortfolioItemI } from "../../interfaces/portfolio";


export interface FolderContentProps {
  title: string;
  data: PortfolioItemI[];
  currentId: number
}