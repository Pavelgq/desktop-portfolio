import { Children, CSSProperties, FC, memo, ReactNode, useEffect } from "react";
import { useDrag, useDragLayer } from "react-dnd";
import { ItemTypes } from "../../interfaces/common";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useSelector } from "react-redux";
import { selectFullScreen } from "../../store/mainStore";

import styles from "./DraggableWrapper.module.css";

// const style: CSSProperties = {
//   position: "absolute",
//   // cursor: "move",
// };

export interface DraggableWrapperProps {
  id: any;
  left: number;
  top: number;
  children?: ReactNode;
}
function getStyles(
  left: number,
  top: number,
  isDragging: boolean
): CSSProperties | undefined {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: "absolute",
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : "",
  };
}

const layerStyles: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: -10,
  width: "100%",
  height: "100%",
  // transition: "all 1s ease-out;",
};
function getItemStyles(initialOffset: any, currentOffset: any) {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none",
    };
  }
  let { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

export const CustomDragLayer = (props: any) => {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }));
  function renderItem() {
    switch (itemType) {
      case ItemTypes.Window:
        return <BoxDragPreview children={props.children} />;
      default:
        return null;
    }
  }
  if (!isDragging) {
    return null;
  }
  return (
    <div style={layerStyles}>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        {renderItem()}
      </div>
    </div>
  );
};

export const DraggableWrapper: FC<DraggableWrapperProps> = memo(
  function DraggableWrapper({ id, left, top, children }) {
    const [{ isDragging }, drag, preview] = useDrag(
      () => ({
        type: ItemTypes.Window,
        item: { id, left, top },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      }),
      [id, left, top]
    );
    useEffect(() => {
      preview(getEmptyImage(), { captureDraggingState: true });
    }, []);

    return (
      <div
        ref={drag}
        style={getStyles(left, top, isDragging)}
        area-role="DraggableWrapper"
        className={styles.draggableZone}
      >
        <Box children={children} />
      </div>
    );
  }
);

export const Box = memo(function Box({ preview, children }: any) {
  return (
    <div className={styles.draggableZone} role={preview ? "BoxPreview" : "Box"}>
      {children}
    </div>
  );
});

export const BoxDragPreview = memo(function BoxDragPreview({ children }: any) {
  return (
    <div
      style={{
        display: "inline-block",
      }}
      area-role="DraggableWrapper"
    >
      <Box preview children={children} />
    </div>
  );
});
