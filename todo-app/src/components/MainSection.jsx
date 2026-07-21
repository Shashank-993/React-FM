import React from 'react'
import AddTodoInput from './AddTodoInput'
import Todos from './Todos'
import Categories from './Categories';
import { useContext } from 'react';
import { TodoContext } from '@/context/TodoContext';

const MainSection = () => {
  const {screenWidth} = useContext(TodoContext)
  return (
    <div className="w-full flex flex-col gap-(--space-m)">
      <AddTodoInput />
      <Todos />
      {screenWidth < 768 ? <Categories /> : null}
    </div>
  );
}

export default MainSection