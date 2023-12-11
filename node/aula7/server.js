const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Olá mundo</button>
    </form>
    `)
})

app.get('/testes', (req, res) => {
    console.log(req.params)
    res.send('Oi')
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário')
})

app.listen(3000, () => {
    console.log('Acessar ___')
    console.log('Servidor executando na porta ___')
}) 