const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection' , socket => {
   socket.on('conectRoom', box =>{
       socket.join(box);
   })
})


mongoose.connect('mongodb+srv://oministack:oministack@cluster0-bah0l.mongodb.net/oministack?retryWrites=true',
 {
    useNewUrlParser:true,
 }
);

 app.use((req, res , next)=>{
    req.io = io;

    return next();//passa pro restante porque nao terminou
 })                  //midlware global








app.use(express.json());
app.use(express.urlencoded({extended:true}));//permite o uso de arquivos
app.use('/files' , express.static(path.resolve(__dirname, '..' , 'tmp')));


app.use(require('./routes'));//pega o arquivo de rotas



let port = 3002;
server.listen(process.env.PORT || port , ()=> {
    console.log(`rodando na porta ${port}`)
})


//install lib socket.io

//yarn add socket.io

//install lib cors

//yarn add cors //modulo que determina quem vai poder acessar nossa aplicação