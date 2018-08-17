import reducer from '../reducers'
import thunk from './redux-thunk.js'
import reporter from './redux-reporter.js'
import { compose, createStore, applyMiddleware } from 'redux'

export default () =>
  createStore(
    reducer,
    compose(applyMiddleware(thunk, reporter))
  )