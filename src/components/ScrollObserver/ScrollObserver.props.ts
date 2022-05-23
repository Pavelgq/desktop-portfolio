import { HtmlAttributes } from "csstype";
import React, { DetailedHTMLProps, ReactNode } from "react";


export interface ScrollOpserverProps {
  currentScroll: number;
  setCurrentScroll: (data: number | undefined) => void;
  Component: React.ComponentType;
}