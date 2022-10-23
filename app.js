const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
require('express-async-errors')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())



app.use('/api/login', loginRouter)

// if (process.env.NODE_ENV === 'test') {
//     const testingRouter = require('./controllers/testing')
//     app.use('/api/testing', testingRouter)
// }




module.exports = app