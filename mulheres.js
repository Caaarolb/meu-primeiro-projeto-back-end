const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Anahi',
        imagem:'https://i.pinimg.com/564x/c2/4c/81/c24c81ccec99f29ec9a15fdd127a3717.jpg',
        minibio:'Cantora e Atriz'
    },
    {
        nome: 'Thalia',
        imagem:'https://imagem.natelinha.uol.com.br/tudo-sobre/thalia29dd8125613043a48c85324ce591d9824371816a_7046.jpeg',
        minibio:'Cantora e Atriz'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)