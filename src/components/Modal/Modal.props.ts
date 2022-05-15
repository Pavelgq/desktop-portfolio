import { ReactElement } from "react"


export interface ModalProps {
  visible: boolean;
  title: string;
  content: ReactElement | string;
  footer?: ReactElement | string;
  onClose: () => void;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}