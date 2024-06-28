const express = require('express');
const sha256 = require('sha256');
const app = express();
const port = 3000;
let token_ativo = null;

const bodyParser = require('body-parser');
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});
app.post('/auth', (req, res) => {
    const { token } = req.body;
    if(token ==  token_ativo){
        res.json({ mensagem: 'USUÁRIO AUTENTICADO' });
    }
    else{
        res.status(400).json({ mensagem: 'USUÁRIO NÃO AUTENTICADO' });
    }
});
app.post('/login', (req, res) => {
    console.log("Requisição de login iniciada ...")
    const { username, password } = req.body;

    // Verifica se a senha está correta (senha fictícia: "123")
    if (username == "ads" && password === "123") {
        console.log("LOGIN: "+ username + " LIBERADO")
        token_ativo = sha256(username+password)
        res.json({ mensagem: 'ACESSO CONCEDIDO', access_token: token_ativo });
    } else {
        console.log("USUÁRIO OU SENHA INVÁLIDOS!")
        res.json({ mensagem: 'USUÁRIO OU SENHA INVÁLIDOS!' });
    }
}); app.use(express.static('public'));
