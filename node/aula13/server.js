require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.emit('pronto')
    })

const routes = require('./routes')
const path = require('path')
const { middlewareGlobal } = require('./src/middlewares/middleware')

app.use(express.urlenconded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(middlewareGlobal)
app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar ___')
        console.log('Servidor executando na porta ___')
    }) 
})