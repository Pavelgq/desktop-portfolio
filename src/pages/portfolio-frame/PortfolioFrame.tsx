import { useSelector } from "react-redux";
import { portfolioData } from "../../data/portfolio";
import { FolderContent } from "../../page-components/FolderContent/FolderContent";
import { selectFolderCurrentIds } from "../../store/folderStore";

export const PortfolioFrame = () => {
  const currentId = useSelector(selectFolderCurrentIds);
  return (
    <FolderContent
      title="Портфолио"
      data={portfolioData}
      currentId={currentId.portfolio}
    />
  );
};
