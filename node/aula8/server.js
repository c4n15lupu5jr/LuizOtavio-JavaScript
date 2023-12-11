const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlenconded({ extended: true }))
app.use(routes)

app.listen(3000, () => {
    console.log('Acessar ___')
    console.log('Servidor executando na porta ___')
}) 