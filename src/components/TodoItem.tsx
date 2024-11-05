import { TodoItemType } from '../types/index';

type TodoItemProps = {
    item: TodoItemType
}

export const TodoItem = ({ item }:TodoItemProps) => {
  return (
    <div>{item.description}</div>
  )
}
