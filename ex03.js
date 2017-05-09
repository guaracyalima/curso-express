const express = require('express')
const server = express()

//passando o metodo get se define exatametne qual url queremos que seja chamada

server.use('/api', function (req, res, next)
{
    console.log('inicio');
    next()
    console.log('fim');
})

server.use('/api', function (req, res) {
  console.log('Resposta...')
  res.send('<h1>API</h1>')
})


//posso passar sem definir o `nome da rota`
//e dai tudo ira passar por esse middleware
// server.use(function (req, res) {
//   console.log('Resposta...')
//   res.send('<h1>API</h1>')
// })


server.listen(3000, () => console.log('Executando....'))
