import { useTodoApp } from "./hooks/useTodoApp"
import { TodoForm, TodoList } from './components';
import { useRef, useState } from "react";

function App() {

  const { todoList, addTodo, removeTodo, modifyTodo, clearCompleted } = useTodoApp();
  const [theme, setTheme] = useState(false)

  const themeCheck = useRef<HTMLInputElement>(null);
  const bg = {
    backgroundImage: 'url(/images/bg-desktop-light.jpg)',
    backgroundSize: '100%',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
  }
  const changeTheme = () => {
    setTheme(!theme)
  }
  return (
    <>
    <div className='h-screen flex items-center pt-20 flex-col gap-10' style={bg}>
        <header className="w-[540px] flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white tracking-[1rem]">TODO</h1>
          <div>
            <input ref={themeCheck} type="checkbox" name="theme" id="theme" className="hidden" onChange={()=>changeTheme()}/>
            <label htmlFor="theme" className="cursor-pointer">
              {
                theme ? <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>      
                      : <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
              }
            </label>
          </div>
        </header>
        <main className="w-[540px]">
          <TodoForm addTodo={addTodo}/>
          {
            todoList.length?<TodoList items={todoList} removeItem={removeTodo} modifyItem={modifyTodo} clearCompleted={clearCompleted}/>:null
          }
          
        </main>
        <footer className="text-center text-[--text-main] text-[15px]">
          <p>Drag and drop to reorder list</p>
        </footer>
    </div>
     
    </>
  )
}

export default App
