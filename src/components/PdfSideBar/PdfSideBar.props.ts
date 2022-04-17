

export type PdfSideBarAnchor = {
    name: string,
    anchor: string,
    id: number,
}

export interface PdfSideBarProps {
  anchors?: PdfSideBarAnchor[];
}