export default (state= [], {type, payload}) => {
    switch(type){
        case 'add_todo':
            return [...state, payload];      
        
        default:
            return state
    }
}