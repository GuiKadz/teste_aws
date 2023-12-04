const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send("Deploy bem sucedido");
})

app.listen(3000);