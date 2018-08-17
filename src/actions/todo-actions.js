import {Todo} from '../utils/util'




export const addTodoItem = (subject) => {
    let todo = new Todo(subject);
    return {type:'add_todo', payload: todo}
}


export const changeTodoComplete = (i) => {
    return {type:'edit_todo', payload: i}
}

export const deleteTodo = (i) => {
    return {type:'delete_todo', payload: i}
}