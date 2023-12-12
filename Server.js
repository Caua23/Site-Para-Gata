

// server.js
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(session({
    secret: 'ayegkse35rtyhx578ifg',
    resave: false,
    saveUninitialized: true
}));
app.use(express.urlencoded({ extended: true })); // Processamento de dados URL-encoded
app.use(express.json()); // Processamento de dados no formato JSON
app.use(express.static(path.join(__dirname, 'public')));

// Simulação de dados de usuário (substitua por um banco de dados real)
const users = [
    { username: 'Rhay', password: 'MinhaCacheadaPerfeita' },
    { username: 'tester', password: '1234' }
];

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.log(req.body.login);
    res.render('index');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simples validação (substitua por uma lógica mais robusta)
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Redirecionar para a página de sucesso em caso de login bem-sucedido
        res.redirect('/success');
    } else {
        // Redirecionar para a página de erro em caso de credenciais inválidas
        res.redirect('/index');
        
    }
});

app.get('/success', (req, res) => {
    res.render('success');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
