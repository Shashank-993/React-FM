import { useContext } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { toast } from "sonner";

import { TodoContext } from "@/context/TodoContext";

import { CardContent } from "./ui/card";
import { Button } from "./ui/button";

import cross from "../images/icon-cross.svg";
import checked from "../images/icon-check.svg";
import { GripIcon } from "lucide-react";
import TodoCheckbox from "./TodoCheckbox";
import TodoActions from "./TodoActions";

const TodoItem = ({ id, todo }) => {
  const { filter } = useContext(TodoContext);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const sortableProps = filter === "all" ? { ...attributes, ...listeners } : {};

  return (
    <CardContent
      ref={setNodeRef}
      style={style}
      className="flex justify-between items-start py-(--space-3xs) touch-none"
    >
      <TodoCheckbox todo={todo} />
      <TodoActions sortableProps={sortableProps} filter={filter} todo={todo}/>
    </CardContent>
  );
};

export default TodoItem;
