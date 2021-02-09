if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const port = 3000
const app = express()
const router = require('./routers/index')
const errorHandler = require('.//middlewares/errorHandler')

app.use(express.urlencoded({extended: true}))
app.use('/', router)
app.use(errorHandler)

app.listen(port, () => {
    console.log('kanban is running in port ', port)
})