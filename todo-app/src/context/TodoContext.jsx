import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { toast } from "sonner";

export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  /* Main state */
  const initialState = {
    todos: [],
  };

  function reducer(state, action) {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };

      case "REMOVE":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };

      case "CHECKED":
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, checked: !todo.checked }
              : todo,
          ),
        };

      case "CLEAR":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.checked === false),
        };
      case "REORDER":
        return {
          ...state,
          todos: action.payload,
        };
      default:
        return state;
    }
  }
  const addTodo = () => {
    const value = input.trim();

    if (!value) {
      toast.error("Todo cannot be empty");
      return;
    }

    const alreadyExists = state.todos.some(
      (todo) => todo.todo.toLowerCase() === value.toLowerCase(),
    );

    if (alreadyExists) {
      toast.info("Todo already exists");
      return;
    }

    dispatch({
      type: "ADD",
      payload: {
        id: crypto.randomUUID(),
        todo: value,
        checked: false,
      },
    });

    toast.success("Todo added successfully");
    setInput("");
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* Filtering logic */
  const [filter, setFilter] = useState(null);

  const filteredTodos = state.todos.filter((todo) => {
    if (filter === "active") return !todo.checked;
    if (filter === "completed") return todo.checked;
    return true;
  });

  return (
    <TodoContext.Provider
      value={{
        state,
        input,
        setInput,
        dispatch,
        screenWidth,
        filteredTodos,
        filter,
        setFilter,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
