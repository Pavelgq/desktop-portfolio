import { Outlet } from "react-router-dom";
import { Footer, FunSidebar, InfoSidebar } from "../../page-components";
import styles from "./DesktopLayout.module.css";
import update from "immutability-helper";
import { useDrop, XYCoord } from "react-dnd";
import { useState, useCallback, TouchEvent } from "react";
import { ItemTypes } from "../../interfaces/common";
import { useSelector } from "react-redux";
import { selectFullScreen } from "../../store/mainStore";
import { SlideConstruct } from "../../components/SlideConstruct/SlideConstruct";

export interface DragItem {
  type: string;
  id: string;
  top: number;
  left: number;
}

export const DesktopLayout = () => {
  const fullScreen = useSelector(selectFullScreen);
  const [draggableItem, setDraggableItem] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setDraggableItem(
        update(draggableItem, {
          $merge: { left, top },
        })
      );
    },
    [draggableItem, setDraggableItem]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.Window,
      drop(item: DragItem, monitor) {
        const client = monitor.getInitialClientOffset() as XYCoord;
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );
  return (
    <div className={styles.container} ref={drop}>
      <div className={styles.innerContainer}>
        <SlideConstruct>
          <InfoSidebar />
          <FunSidebar />
          <InfoSidebar />
          <FunSidebar />
          <InfoSidebar />
          <FunSidebar />
        </SlideConstruct>
      </div>
      <Outlet context={{ draggableItem }} />
      <Footer />
    </div>
  );
};
