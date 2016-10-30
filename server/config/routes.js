'use strict'
module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index')
  })

  app.all('*', (req, res) => {
    res.status(404)
    res.send('Not Found')
    res.end()
  })
}
