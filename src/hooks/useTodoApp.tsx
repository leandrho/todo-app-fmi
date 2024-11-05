import { useState } from 'react'
import type { TodoItem } from '../types';
export const useTodoApp = () => {
    
    const [todoList, setTodoList] = useState<TodoItem[]>([]);

    const addTodo = (todo:TodoItem) => {
        setTodoList([...todoList, todo]);//need to check for duplicates? 
    }
    const removeTodo = (id :number) => {
        setTodoList(todoList.filter( todo => todo.id !== id))
    }
    const modifyTodo = ( todo :TodoItem ) => {
        setTodoList( todoList.map( t => {
            if(t.id == todo.id)
                return todo;
            return t;
        }) );
    }
    
    return {
        todoList,
        addTodo,
        removeTodo,
        modifyTodo
    };
}
