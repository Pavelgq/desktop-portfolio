import { certificatesData } from "../../data/certificates";
import { FolderContent } from "../../page-components/FolderContent/FolderContent";

export const CertificatesFrame = () => {
  return (
    <>
      <FolderContent title="Сертификаты" data={certificatesData} />
    </>
  );
};
