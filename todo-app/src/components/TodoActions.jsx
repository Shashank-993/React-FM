import { TodoContext } from "@/context/TodoContext";
import { GripIcon } from "lucide-react";
import React from "react";
import { useContext } from "react";
import cross from '../images/icon-cross.svg'
import { Button } from "./ui/button";
import { toast } from "sonner";
const TodoActions = ({filter, sortableProps, todo}) => {
  const {dispatch} = useContext(TodoContext)
  return (
    <div className="flex items-center gap-(--space-3xs) md:gap-(--space-s)">
      {filter === "all" && (
        <GripIcon
          {...sortableProps}
          className="cursor-grab text-(--text-secondary) outline-0"
        />
      )}
      <Button
        className="bg-transparent hover:bg-transparent cursor-pointer"
        onClick={() => {
          dispatch({
            type: "REMOVE",
            payload: todo.id,
          });

          toast.success("Todo removed");
        }}
      >
        <img src={cross} alt="cross-icon" />
      </Button>
    </div>
  );
};

export default TodoActions;
