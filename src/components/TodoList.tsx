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
            items.map(( todo,index )=>(
                <div key={todo.id}>
                  <TodoItem  item={todo} removeItem={removeItem} modifyItem={modifyItem}/>
                  {
                    items.length!==index+1?<hr />:null
                  }
                </div>
            ))
        }
    </div>
  )
}
