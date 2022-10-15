import { portfolioData } from "../../data/portfolio";
import { FolderContent } from "../../page-components/FolderContent/FolderContent";

export const PortfolioFrame = () => {
  return <FolderContent title="Портфолио" data={portfolioData} />;
};
