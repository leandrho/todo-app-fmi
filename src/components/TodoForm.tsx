import { TodoItemType } from "../types";

type TodoFormProps = {
  addTodo : (todo :TodoItemType) => void;
}
export const TodoForm = ( { addTodo } :TodoFormProps) => {
  
  return (
    <form action="#" className="h-16 flex">
      <div className="bg-white rounded-lg flex-grow flex items-center gap-6 px-4">
        <button aria-label="submit" type="button" className="appearance-none w-7 h-7 cursor-pointer rounded-full border-2 border-[--border-check] hover:bg-gradient-to-br hover:from-[--grad-from] hover:to-[--grad-to]"/>
        <input aria-label="Enter new task" type="text"  placeholder="Create a new todo..." className="outline-none min-h-6 text-[--text-main]" />
      </div>
      
    </form>
  )
}
