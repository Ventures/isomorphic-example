/**
 * Example server showing server-rendered React application.
 *
 * @author tahartik <taneli.hartikainen@digia.com>
 */

const path    = require('path')
const express = require('express')

const template = (app = '', data = '') => `
  <html>
    <head>
      <script id="initial-data" type="application/x-initial-data">
        ${data}
      </script>
    </head>
    <body>
      <div id="app">${app}</div>
      <script src="/app.js"></script>
    </body>
  </html>
`

express()

  .get('/', (req, res) => {
    const initialState = {
      isClient: false
    }
    res.send(template(null, JSON.stringify(initialState)))
  })

  .get('/app.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/app.js'))
  })

  .listen(3000)
