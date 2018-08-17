import React from 'react'
import { connect } from 'react-redux'
import {compose} from 'recompose'

import TodoForm from '../todo-form'
import TodoList from '../todo-list'

class DashboardContainer extends React.Component{
  constructor(props){
    super(props)
    
  }
  render(){
    return (
      <div className='dashboard-container'>
        <h3 className='main-title'>To-Do</h3>
        <TodoForm/>
        <TodoList/>
      </div>
    )
  }
}


export const mapStateToProps = state => ({
  todoList: state.todoList,
})

export const mapDispatchToProps = dispatch => ({
  
})



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(DashboardContainer)