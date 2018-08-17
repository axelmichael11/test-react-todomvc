import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import {connect} from 'react-redux'
import DashboardContainer from './components/dashboardcontainer/index.js'
import storeCreate from './utils/store-create.js'


import './styles/base.css'
import './styles/app.css'


const store = storeCreate()


class App extends React.Component {
  componentDidMount(){
    store.subscribe(()=> {
      console.log(':::STATE:::', store.getState())
    })
    store.dispatch({type:null})
  }
  

  render(){
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={DashboardContainer}/>
          </BrowserRouter>
        </Provider>
        </div>
    )
  }
}


ReactDom.render(<App/>, document.getElementById('App'))