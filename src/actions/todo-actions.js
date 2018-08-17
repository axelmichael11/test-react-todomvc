import {Todo} from '../utils/util'




export const addTodoItem = (subject) => {
    let todo = new Todo(subject);
    console.log('NEW TODO', todo);
    return {type:'add_todo', payload: todo}
}