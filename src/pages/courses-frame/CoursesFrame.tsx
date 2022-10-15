import { coursesData } from "../../data/courses";
import { FolderContent } from "../../page-components/FolderContent/FolderContent";

export const CoursesFrame = () => {
  return <FolderContent title="Курсы" data={coursesData} />;
};
