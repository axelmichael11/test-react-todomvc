import React from 'react'
import { connect } from 'react-redux'
import {addTodoItem} from '../../actions/todo-actions'
import {compose} from 'recompose'


class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        todoMessage: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  


  handleChange(e){
    this.setState({todoMessage: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault()
    if (this.state.todoMessage.length ===0){
        return;
    } else {
        let trimmed = this.state.todoMessage.trim();
        this.props.addTodoItem(trimmed);
        this.setState({todoMessage:''})
    }
  }

  render(){
    return (
  <div>
    <form className='todo-form' onSubmit={this.handleSubmit}>
      <input
      autoFocus
        type='text'
        name='todo'
        placeholder='New'
        onChange={this.handleChange}
        value={this.state.todoMessage}
      />
     <button
      className='todo-submit'
      label='+'
      onClick={this.handleSubmit}
    />
  </form>
  </div>
    )
  }
}



export const mapStateToProps = state => ({
    todoList: state.todoList,
  })
  
  export const mapDispatchToProps = dispatch => ({
    addTodoItem: (todoMessage)=> dispatch(addTodoItem(todoMessage)),

  })
  
  
  
  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
  )(TodoForm)