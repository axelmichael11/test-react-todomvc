
import React from 'react'
import { connect } from 'react-redux'
import {  compose, branch, renderComponent} from 'recompose'
import {changeTodoComplete, deleteTodo} from '../../actions/todo-actions'



const TodoItemCount = ({})



const TodoItem = ({...props}) => {
    console.log('props on todo item!', props.hover, props.hoverkey)
    return (
        <div 
        className='todo-item-container'
        onMouseEnter={props.handleMouseEnter}
        onMouseLeave={props.handleMouseLeave}>
            <li className={props.todo.completed ? 'todo-completed' :'todo-not-completed'}>
                <h1 className='todo-title'>Task {props.todoNumber}</h1>
                <p className='todo-message'>{props.todo.todoMessage}</p>
                <button
                className='todo-item-checkbox'
                label='X'
                onClick={props.handleTodoComplete}
                >
                {props.todo.completed? 'Complete': 'X'}
                </button>
                {
                    (props.hover===props.todoNumber)?(<button
                                            onClick={props.handleTodoDelete}
                                            >
                                            Delete Todo item
                                            </button>
                                    ): null
                    }
            </li>
        </div>
    )
}

class TodoList extends React.Component{
    constructor(props){
      super(props)
      this.state= {
          hover: false,
          todoHover: null,
          itemsLeft: this.renderItemsLeft(),

      }
      this.renderList = this.renderList.bind(this)
      this.handleTodoComplete = this.handleTodoComplete.bind(this)
      this.handleMouseLeave = this.handleMouseLeave.bind(this)
      this.handleMouseEnter = this.handleMouseEnter.bind(this)
      this.renderItemsLeft = this.renderItemsLeft.bind(this)
    }

    handleMouseLeave(){
        this.setState({
            todoHover: null,
            hover:false
        })
    }

    handleMouseEnter(i){
        this.setState({
            todoHover: i,
            hover:true
        })
    }

    handleTodoComplete(i){
        console.log('hitting handle todo complete', i)
        this.props.changeTodoComplete(i);
    }
    handleTodoDelete(i){
        this.props.deleteTodo(i);
    }

    getItemsLeft(){
        let itemsLeft = this.props.todoList.reduce((a, c)=> {
            if (c.completed===true) {
                a++; 
            }
            return a;
            }, 0);
        this.setState({
            itemsLeft: itemsLeft
        })
    }

    renderItemsLeft(){
        let itemsLeft = this.props.todoList.reduce((a, c)=> {
            if (c.completed===true){
                a--; 
            }
            return a;
            }, this.props.todoList.length);

        if ( itemsLeft === 1){
            return (<h3 className='item-count'><strong>{itemsLeft}</strong> item left</h3>);
        } else {
            return (<h3 className='item-count'><strong>{itemsLeft}</strong> items left</h3>);
        }
    }

    renderList(){
        console.log('TODO LIST', this.props, this.state)
        
        return (
            <div className='todo-list-container'>
                {this.renderItemsLeft()}
                <ol className='todo-list'>
                    {this.props.todoList.map((todo,i) => (
                    <div key={i}>
                    <TodoItem 
                        todo={todo}
                        todoNumber={i+1}
                        hover={this.state.todoHover}
                        handleTodoComplete={()=>this.handleTodoComplete(i)}
                        handleTodoDelete={()=>this.handleTodoDelete(i)}
                        handleMouseEnter={()=>this.handleMouseEnter(i+1)}
                        handleMouseLeave={()=>this.handleMouseLeave()}
                    />
                    </div>))}
                </ol>
            </div>
        )
    }
    render(){
        if (this.props.todoList.length > 0){
            return this.renderList()
        } else {
            return null;
        }
    }
  }



export const mapStateToProps = state => ({
    todoList: state.todoList,
  })
  
  export const mapDispatchToProps = dispatch => ({
    changeTodoComplete:(i)=> dispatch(changeTodoComplete(i)),
    deleteTodo: (i)=> dispatch(deleteTodo(i))
  })


 
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
  )(TodoList);