import { TodoItemType } from '../types';
import { TodoItem } from './TodoItem';

type TodoListProps = {
    items :TodoItemType[];
    removeItem: (id:number) => void;
    modifyItem: (todo:TodoItemType)=>void;
}

export const TodoList = ({ items, removeItem, modifyItem }:TodoListProps) => {
  return (
    <div className='mt-6 flex flex-col bg-white rounded-lg'>
        {
            items.map(( todo )=>(
                <div key={todo.id}>
                  <TodoItem  item={todo} removeItem={removeItem} modifyItem={modifyItem}/>
                  <hr />
                </div>
            ))
        }
        <div className='h-12 flex items-center px-4 justify-between'>
          <p className='text-[--text-completed] text-base'>
            {items.reduce(( acc, c ) => c.done ? acc : acc+1 , 0)} items left
          </p>
          <div></div>{/* Show all, active, completed*/}
          <div></div>{/* Clear completed*/}
        </div>
    </div>
  )
}
