import { useSelector } from "react-redux";
import { coursesData } from "../../data/courses";
import { FolderContent } from "../../page-components/FolderContent/FolderContent";
import { selectFolderCurrentIds } from "../../store/folderStore";

export const CoursesFrame = () => {
  const currentId = useSelector(selectFolderCurrentIds);
  return (
    <FolderContent
      title="Курсы"
      data={coursesData}
      currentId={currentId.courses}
    />
  );
};
