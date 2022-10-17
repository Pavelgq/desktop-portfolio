import { useSelector } from "react-redux";
import { certificatesData } from "../../data/certificates";
import { FolderContent } from "../../page-components/FolderContent/FolderContent";
import { selectFolderCurrentIds } from "../../store/folderStore";

export const CertificatesFrame = () => {
  const currentId = useSelector(selectFolderCurrentIds);
  return (
    <>
      <FolderContent
        title="Сертификаты"
        data={certificatesData}
        currentId={currentId.certificates}
      />
    </>
  );
};
