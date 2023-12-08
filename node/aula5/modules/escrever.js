const fs = require('fs')
const path = require('path')
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt')

fs.writeFile(caminhoArquivo, 'Frase 1', { flag: 'w' })