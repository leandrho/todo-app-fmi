import { useTodoApp } from "./hooks/useTodoApp"
import { TodoForm, TodoList } from './components';

function App() {

  const { todoList, addTodo, removeTodo, modifyTodo } = useTodoApp();
  
  const bg = {
    backgroundImage: 'url(/images/bg-desktop-light.jpg)',
    backgroundSize: '100%',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <>
    <div className='h-screen flex items-center pt-20 flex-col gap-10' style={bg}>
        <header className="w-[540px]">
          <h1 className="text-4xl font-bold text-white tracking-[1rem]">TODO</h1>
        </header>
        <main className="w-[540px]">
          <TodoForm addTodo={addTodo}/>
          <TodoList items={todoList} removeItem={removeTodo} modifyItem={modifyTodo}/>
        </main>
    </div>
     
    </>
  )
}

export default App
