import { TodoItemType } from '../types';
import { TodoItem } from './TodoItem';

type TodoListProps = {
    items :TodoItemType[]
}

export const TodoList = ({ items }:TodoListProps) => {
  return (
    <div>
        {
            items.map(( todo )=>(
                <TodoItem key={todo.id} item={todo}/>
            ))
        }
    </div>
  )
}
