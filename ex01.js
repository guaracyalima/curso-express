const express = require('express')
const server = express()

//cria uma instancia do express. o server criar uma especime de rota.
//o primero parametro. entre aspas fica a url, no caso a /, o metodo no caso get
//e o segundo parametro e o middleware
server.get('/', function (req, res)
{
    res.send('<h1>Index</h1>')
    //deve se definir uma porta para a leitura da applicacao
})

server.all('/teste', function(req, res)
{
    res.send('<h1>Tste</h1>')
})

server.get(/api/, function (req, res)
{
    res.send('<h1>API</h1>')
})



server.listen(3000, () => console.log('Executando....'))
