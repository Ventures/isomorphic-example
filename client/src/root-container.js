/**
 * Example React + Redux application in a single file.
 *
 * @author tahartik <taneli.hartikainen@digia.com>
 */

const React       = require('react')
const Redux       = require('redux')
const Route       = require('react-router').Route
const Router      = require('react-router').Router
const Provider    = require('react-redux').Provider
const ReduxRouter = require('react-router-redux')

// simple reducer to keep track of whether this application was initialized in
// the server or on the browser
const isomorphicReducer = (isClient = false) => isClient

module.exports = initialState => {
  console.log('Rendering with ::', JSON.stringify(initialState))
  const store = Redux.createStore(
    Redux.combineReducers({
      routing:  ReduxRouter.routerReducer,
      isClient: isomorphicReducer,
    }),
    initialState
  )
  const history = ReduxRouter.syncHistoryWithStore(
    require('react-router').browserHistory,
    store
  )
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={require('./views/example')} />
      </Router>
    </Provider>
  )
}