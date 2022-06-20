const express = require('express');

const app = express();

app.get('/', (request,response) => {
    const params = request.query
    console.log(params)
    return response.json({'message':"Olá, Mundo"})
})

app.listen(3333);