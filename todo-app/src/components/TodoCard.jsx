import { useContext } from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { TodoContext } from "@/context/TodoContext";

import TodoItem from "./TodoItem";
import { Card, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import Categories from "./Categories";
import { toast } from "sonner";

const TodoCard = () => {
  const { state, dispatch, screenWidth, filteredTodos, filter } =
    useContext(TodoContext);

  return (
    <Card className="border-none rounded-none bg-transparent divide-y max-h-62 lg:max-h-80 overflow-y-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-(--surface)">
      <SortableContext
        items={filteredTodos.map((todo) => todo.id)}
        strategy={verticalListSortingStrategy}
      >
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} todo={todo} />
        ))}
      </SortableContext>

      <CardFooter className="text-(--text-secondary) text-(length:--fs-0) bg-(--surface) flex justify-between items-center gap-4 border-none">
        <p className="hover:text-(--text-primary)  cursor-pointer">
          {state.todos.length} items
        </p>

        {screenWidth >= 768 && <Categories />}

        <Button
          variant="ghost"
          className="hover:text-(--text-primary)  cursor-pointer text-(length:--fs-0)"
          onClick={() => {
            dispatch({ type: "CLEAR" });
            toast.success("Cleared completed todos");
          }}
        >
          Clear completed
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TodoCard;
