import {Todo} from '../utils/util'




export const addTodoItem = (subject) => {
    let todo = new Todo(subject);
    console.log('NEW TODO', todo);
    return {type:'add_todo', payload: todo}
}


export const changeTodoComplete = (i) => {
    console.log('hitting change todo', i)
    return {type:'edit_todo', payload: i}
}

export const deleteTodo = (i) => {
    console.log('hitting Delete todo')
    return {type:'delete_todo', payload: i}
}