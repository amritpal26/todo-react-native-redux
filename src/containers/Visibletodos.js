import { connect } from 'react-redux';

import TodoList from './../components/TodoList'
import { toggleTodo } from './../actions/index'
import { VisibilityFilters } from './../actions/index'


const mapStateToProps = state => {
    filteredTodos = {}
    switch(state.visibilityFilter){
        case VisibilityFilters.SHOW_ALL:
            filteredTodos = state.todos
            break;
        case VisibilityFilters.SHOW_ACTIVE:
            filteredTodos = state.todos.filter(todo => !todo.completed)
            break;
        case VisibilityFilters.SHOW_COMPLETED:
            filteredTodos = state.todos.filter(todo => todo.completed)
            break;
        default:
            filteredTodos = state.todos
    }
    return({
        todos: filteredTodos
    })
}

const mapDispatchToProps = dispatch => {
    return({
        toggleTodo: id => dispatch(toggleTodo(id)) 
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)