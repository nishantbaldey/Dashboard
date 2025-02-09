import { ReactNode } from "react";
import RGL, { Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

interface GridProps {
  children: ReactNode;
  layout: Layout[];
  onLayoutChange: (layout: Layout[]) => void;
}

export default function Grid({ children, layout, onLayoutChange }: GridProps) {
  return (
    <RGL
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={100}
      width={1200}
      margin={[16, 16]}
      containerPadding={[0, 0]}
      onLayoutChange={onLayoutChange}
      draggableHandle=".card-header"
      resizeHandle={
        <div className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize" />
      }
    >
      {children}
    </RGL>
  );
}
