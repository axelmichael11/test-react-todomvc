import React from 'react'
import { connect } from 'react-redux'
import {compose} from 'recompose'

import TodoForm from '../todo-form'


class DashboardContainer extends React.Component{
  constructor(props){
    super(props)
    
  }
  render(){
    return (
      <div className='dashboard-container'>
        <h1 className='main-title'>To-Do</h1>
        <TodoForm/>
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