import { useId, useRef } from 'react';
import { TodoItemType } from '../types/index';

type TodoItemProps = {
    item: TodoItemType,
    removeItem: (id:number) => void;
    modifyItem: (todo:TodoItemType)=>void;
}

export const TodoItem = ({ item, removeItem, modifyItem }:TodoItemProps) => {

  const input = useRef<HTMLInputElement>(null);
  const id = useId();

  const checkinput = useRef<HTMLInputElement>(null);
  const changeDone = ()=>{
    if(checkinput.current){
      const d :boolean = checkinput.current.checked;
      const mitem :TodoItemType = {...item, done: d};
      modifyItem(mitem);
    }
    
  }

  return (
    <div className='h-16 flex'>
      <div className="bg-white flex-grow flex items-center justify-between gap-6 px-4 rounded-lg">
        <div className='flex items-center gap-6 relative'>
            <input ref={checkinput} id={id} type='checkbox' aria-label="submit" 
                  className="block peer appearance-none min-w-[28px] min-h-[28px] cursor-pointer rounded-full border-2 border-[--border-check] checked:bg-gradient-to-br checked:from-[--grad-from] 
                  checked:to-[--grad-to]"
                  checked={item.done}
                  onChange={()=>changeDone()}
            />
            <label htmlFor={id} aria-label="submit label" className='absolute top-[50%] left-[9px] translate-y-[-50%] hidden peer-checked:flex'>
              <img src="./images/icon-check.svg" alt="" />
            </label>
            <input ref={input} aria-label="Enter new task" type="text" className="w-full outline-none min-h-6 text-[--text-main] peer-checked:line-through peer-checked:text-[--text-completed]" value={item.description} readOnly/>
          </div>

        <button className=''
                onClick={()=>removeItem(item.id)}
        >
          <img src="./images/icon-cross.svg" alt="" />
        </button>
        
      </div>
    </div>
  )
}
