const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: 'Anahi',
    imagem: 'https://i.pinimg.com/564x/c2/4c/81/c24c81ccec99f29ec9a15fdd127a3717.jpg',
    minibio: 'Cantora e Atriz'
})

}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)