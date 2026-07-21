import { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import TodoCard from "./TodoCard";

const Todos = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const oldIndex = state.todos.findIndex((todo) => todo.id === active.id);

    const newIndex = state.todos.findIndex((todo) => todo.id === over.id);

    dispatch({
      type: "REORDER",
      payload: arrayMove(state.todos, oldIndex, newIndex),
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <div className="flex flex-col rounded-md bg-(--surface) shadow-xl overflow-hidden">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <TodoCard />
      </DndContext>
    </div>
  );
};

export default Todos;
