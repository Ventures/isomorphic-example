/**
 * Simple "example" of a stateless React component.
 *
 * @author tahartik <taneli.hartikainen@digia.com>
 */

const React = require('react')
const Redux = require('react-redux')

const ExampleView = props =>
  <div className="example-view">
    <pre>{JSON.stringify(props)}</pre>
  </div>

module.exports = Redux.connect(state => state)(ExampleView)
