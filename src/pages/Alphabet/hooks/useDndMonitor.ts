// hooks/useDndMonitor.ts
import { useDndMonitor } from "@dnd-kit/core";

export const useDragMonitor = (setActiveId: (id: string | null) => void) => {
  useDndMonitor({
    onDragStart: (event) => setActiveId(event.active.id as string),
    onDragEnd: () => setActiveId(null),
    onDragCancel: () => setActiveId(null),
  });
};
