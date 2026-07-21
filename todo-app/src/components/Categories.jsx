import React from "react";
import { Card, CardContent } from "./ui/card";
import { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";
import { Button } from "./ui/button";

const Categories = () => {
  const { filter, setFilter, screenWidth } = useContext(TodoContext);
  return (
    <Card
      className={`border-0 bg-(--surface) ${screenWidth < 768 ? "shadow-xl" : null} rounded-md text-white`}
    >
      <CardContent className="flex justify-center items-center gap-4">
        <Button
          variant="ghost"
          onClick={() => setFilter("all")}
          className={`cursor-pointer ${filter === "all" ? "text-accent" : "text-(--text-secondary) hover:text-(--text-primary)"} text-(length:--fs-0)`}
        >
          All
        </Button>

        <Button
          variant="ghost"
          onClick={() => setFilter("active")}
          className={`cursor-pointer ${filter === "active" ? "text-accent" : "text-(--text-secondary) hover:text-(--text-primary)"} text-(length:--fs-0)`}
        >
          Active
        </Button>

        <Button
          variant="ghost"
          onClick={() => setFilter("completed")}
          className={`cursor-pointer ${filter === "completed" ? "text-accent" : "text-(--text-secondary) hover:text-(--text-primary)"} text-(length:--fs-0)`}
        >
          Completed
        </Button>
      </CardContent>
    </Card>
  );
};

export default Categories;
