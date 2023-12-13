const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(express.urlenconded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)

app.listen(3000, () => {
    console.log('Acessar ___')
    console.log('Servidor executando na porta ___')
}) 