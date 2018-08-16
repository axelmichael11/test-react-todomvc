export default (state= [], {type, payload}) => {
    switch(type){
        case 'add_todo':
            return [...state, payload];      
        case 'edit_todo':
            return state.map((todo, i)=>{
                if (i === payload){
                    todo.completed = !todo.completed;
                }
                return todo
            });
        case 'delete_todo':
            return state.filter((todo,i)=>  i !== payload);
        default:
            return state
    }
}