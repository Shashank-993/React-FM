import { TodoContext } from "@/context/TodoContext";
import React from "react";
import { useContext } from "react";
import checked from "../images/icon-check.svg"
const TodoCheckbox = ({todo}) => {
    const {dispatch} = useContext(TodoContext)
  return (
    <div className="flex items-center gap-(--space-s)">
      <div
        onClick={() => {
          dispatch({
            type: "CHECKED",
            payload: todo.id,
          });

          if (!todo.checked) {
            toast.success("Nice! Todo completed");
          }
        }}
        className={`
    group flex h-6 w-6 cursor-pointer items-center justify-center rounded-full
    ${
      todo.checked
        ? "bg-linear-to-b from-(--checkbox-gradient-from) to-(--checkbox-gradient-to)"
        : "bg-(--checkbox-border) hover:bg-linear-to-b hover:from-(--checkbox-gradient-from) hover:to-(--checkbox-gradient-to)"
    }
    p-[1px] transition-all duration-200
  `}
      >
        <div
          className={`
      flex h-full w-full items-center justify-center rounded-full
      ${todo.checked ? "bg-transparent" : "bg-(--surface)"}
    `}
        >
          {todo.checked && (
            <img src={checked} alt="checked" className="w-4 h-4" />
          )}
        </div>
      </div>

      <p
        className={`${
          todo.checked
            ? "line-through text-(--text-completed)"
            : "text-(--text-primary)"
        } text-(length:--fs-1) max-w-32 md:max-w-80 overflow-x-auto`}
      >
        {todo.todo}
      </p>
    </div>
  );
};

export default TodoCheckbox;
