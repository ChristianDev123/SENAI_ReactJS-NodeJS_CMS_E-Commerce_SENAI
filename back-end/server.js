const express = require('express');
const app = express();
const porta = 3001;
const rotas = require('./Routes')
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.use(rotas);

app.listen(porta,(req,res)=>{
    console.log("servidor rodando")
})