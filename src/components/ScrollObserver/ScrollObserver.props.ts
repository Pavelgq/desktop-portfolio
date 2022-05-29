
import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface ScrollOpserverProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  currentScroll: number;
  setCurrentScroll: (data: number | undefined) => void;
  trigger?: any;
}