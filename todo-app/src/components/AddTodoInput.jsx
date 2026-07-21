import React from "react";
import { Input } from "./ui/input";
import { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";
import { toast } from "sonner";

const AddTodoInput = () => {
  const { input, setInput, state, dispatch, addTodo } = useContext(TodoContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo()
  };
  return (
    <div className="flex items-center gap-(--space-s) px-(--space-s) py-(--space-2xs) rounded-md bg-(--surface) shadow-lg">
      <div
        role="button"
        onClick={addTodo}
        className="w-6 h-6 rounded-full border border-border"
      />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          autoComplete="off"
          placeholder="Create a new todo..."
          className="border-0 bg-transparent shadow-none text-(length:--fs-0) md:text-(length:--fs-0) text-(--text-primary) placeholder:text-(--text-placeholder) focus-visible:ring-0"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="hidden" />
      </form>
    </div>
  );
};

export default AddTodoInput;
