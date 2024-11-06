import { useRef } from "react";
import { TodoItemType } from "../types";

let globalID = 0;
type TodoFormProps = {
  addTodo : (todo :TodoItemType) => void;
}

export const TodoForm = ( { addTodo } :TodoFormProps) => {

  const input = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if(input.current){
      if(!input.current.value)
        return;
      const ntodo :TodoItemType = {
        id: ++globalID,
        name: 'nuevo',
        description: input.current.value,
        done: false,
      }
      addTodo(ntodo);
      input.current.value='';
    }
      
  }

  return (
    <form action="#" className="h-16 flex">
      <div className="bg-white rounded-lg flex-grow flex items-center gap-6 px-4">
        <button aria-label="submit" 
                className="appearance-none w-7 h-7 cursor-pointer rounded-full border-2 border-[--border-check] hover:bg-gradient-to-br hover:from-[--grad-from] hover:to-[--grad-to]"
                onClick={()=>handleSubmit()}
                />
        <input ref={input} aria-label="Enter new task" type="text"  placeholder="Create a new todo..." className="outline-none min-h-6 text-[--text-main] w-full" />
      </div>
    </form>
  )
}
