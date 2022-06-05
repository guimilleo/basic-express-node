const express = require('express');

const app = express();

app.get('/index', (request,response) => {
    return response.json({'message':"Olá, Dessa"})
})

app.listen(3333);