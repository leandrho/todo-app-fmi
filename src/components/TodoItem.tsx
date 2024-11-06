import { useRef } from 'react';
import { TodoItemType } from '../types/index';

type TodoItemProps = {
    item: TodoItemType
}

export const TodoItem = ({ item }:TodoItemProps) => {
  const input = useRef<HTMLInputElement>(null);
  return (
    <div className='h-16 flex'>
      <div className="bg-white rounded-lg flex-grow flex items-center gap-6 px-4">
        <input type='checkbox' aria-label="submit" 
                className="peer appearance-none w-7 h-7 cursor-pointer rounded-full border-2 border-[--border-check] checked:bg-gradient-to-br checked:from-[--grad-from] checked:to-[--grad-to]"
             
                />
        <input ref={input} aria-label="Enter new task" type="text" className="outline-none min-h-6 text-[--text-main] peer-checked:line-through" value={item.description} readOnly/>
      </div>
    </div>
  )
}
