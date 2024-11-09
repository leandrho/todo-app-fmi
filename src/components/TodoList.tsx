import { useEffect, useRef, useState } from 'react';
import { TodoItemType } from '../types';
import { TodoItem } from './TodoItem';

type TodoListProps = {
    items :TodoItemType[];
    removeItem: (id:number) => void;
    modifyItem: (todo:TodoItemType)=>void;
    clearCompleted: ()=>void;
}

export const TodoList = ({ items, removeItem, modifyItem, clearCompleted }:TodoListProps) => {

  const allInput = useRef<HTMLInputElement>(null);
  const [showItems, setShowItems] = useState<TodoItemType[]>([]);

  useEffect(() => {
    setShowItems(items);
    if(allInput.current)
      allInput.current.checked = true;
  }, [ items ])
  
  const filterTodos = (filter :string) => {
    if(filter==='active')
      setShowItems(items.filter((i)=>!i.done));
    else if(filter === 'completed')
      setShowItems(items.filter((i)=>i.done));
    else
      setShowItems(items);
  }

  return (
    <div className='mt-6 flex flex-col bg-white rounded-lg'>
        {
            showItems.map(( todo )=>(
                <div key={todo.id}>
                  <TodoItem  item={todo} removeItem={removeItem} modifyItem={modifyItem}/>
                  <hr />
                </div>
            ))
        }
        <div className='h-12 flex items-center px-4 justify-between'>
          <p className='text-[--text-completed] text-sm'>
            {showItems.reduce(( acc, c ) => c.done ? acc : acc+1 , 0)} items left
          </p>
          <div className='flex items-center gap-4 text-base'>
            <input ref={allInput} type="radio" id='all' name='show' className='peer/all hidden'
               onChange={()=>filterTodos('all')}
            />
            <label htmlFor="all" className='peer-checked/all:text-[--Bright-Blue] cursor-pointer'>All</label>
            <input type="radio" id='active' name='show' className='peer/active hidden'
              onChange={()=>filterTodos('active')}
            />
            <label htmlFor="active" className='peer-checked/active:text-[--Bright-Blue] cursor-pointer'>Active</label>
            <input type="radio" id='completed' name='show' className='peer/completed hidden'
              onChange={()=>filterTodos('completed')}
            />
            <label htmlFor="completed" className='peer-checked/completed:text-[--Bright-Blue] cursor-pointer'>Completed</label>
          </div>
          <div>
            <button className='text-base'
                    onClick={()=>clearCompleted()}
            >
              Clear completed
            </button>
          </div>
        </div>
    </div>
  )
}
