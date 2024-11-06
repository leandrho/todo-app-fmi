import { useTodoApp } from "./hooks/useTodoApp"
import { TodoForm, TodoList } from './components';

function App() {

  const { todoList, addTodo } = useTodoApp();
  
  const bg = {
    backgroundImage: 'url(/images/bg-desktop-light.jpg)',
    backgroundSize: '100% 100%',
    backgroundPosition: 'top',
  }
  return (
    <>
    <div className='min-h-[300px] flex items-center justify-center flex-col gap-10' style={bg}>
      <header className="w-[540px]">
        <h1 className="text-4xl font-bold text-white tracking-[1rem]">TODO</h1>
      </header>
      <main className="w-[540px]">
        <TodoForm addTodo={addTodo}/>
      </main>
    </div>
     
    </>
  )
}

export default App
