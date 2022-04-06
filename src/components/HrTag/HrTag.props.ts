import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HrTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  thickness?: 'low' | 'medium' | 'high'
}