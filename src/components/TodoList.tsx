import { TodoItemType } from '../types';
import { TodoItem } from './TodoItem';

type TodoListProps = {
    items :TodoItemType[]
}

export const TodoList = ({ items }:TodoListProps) => {
  return (
    <div className='mt-8 flex flex-col gap-1'>
        {
            items.map(( todo )=>(
                <TodoItem key={todo.id} item={todo}/>
            ))
        }
    </div>
  )
}
