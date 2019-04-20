export default todos = (state=[], action) => {
    
    switch(action.type){
        
        case 'ADD_TODO':
            console.log('changed')
            return [
                ...state,
                {
                    id : action.id,
                    text : action.text,
                    completed : false
                }
            ]
        case 'TOGGLE_TODO':
            console.log('id' + action.id)
            console.log(state)
            return state.map(todo => 
                (todo.id === action.id) ? 
                {...todo, completed: !todo.completed} :
                 todo
                )

        default:
            return state
    }
}

