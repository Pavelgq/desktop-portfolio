

export type SideBarAnchor = {
    name: string,
    anchor: string,
    id: number,
}

export interface SideBarProps {
  anchors?: SideBarAnchor[];
}