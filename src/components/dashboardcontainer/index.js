import React from 'react'
import { connect } from 'react-redux'
import {compose} from 'recompose'




class DashboardContainer extends React.Component{
  constructor(props){
    super(props)
    
  }
  render(){
    return (
      <div className='dashboard-container'>
        <h1 className='main-title'>To-Do</h1>
        
      </div>
    )
  }
}


export const mapStateToProps = state => ({
  
})

export const mapDispatchToProps = dispatch => ({
  
})



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(DashboardContainer)