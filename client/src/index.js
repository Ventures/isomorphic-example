/**
 * Entrypoint for the client side application.
 *
 * @author tahartik <taneli.hartikainen@digia.com>
 */

const React    = require('react')
const ReactDOM = require('react-dom')


console.log('Checking for initial state...')

let initialState = { }
if(!!document.getElementById('initial-data')) {
  console.log('Document contains initial state...')
  try {
    initialState =
      JSON.parse(document.getElementById('initial-data').innerHTML)
  }
  catch(err) {
    console.error('Failed to parse initial state...')
  }
}

// we know we're on the client now... :-)
initialState = Object.assign({}, initialState, { isClient: true })

ReactDOM.render(
  require('./root-container')(initialState), document.getElementById('app'))
