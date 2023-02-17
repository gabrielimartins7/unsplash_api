const express = require('express');

const app = express();

app.use(express.json());

const images = [];

app.get("/home", (request, response) => {
    return response.status(201).json(images);
})

app.post("/image", (request, response) => {
    const { text, url } = request.body
    
    images.push({
        title: text,
        uri: url
    });
    

    return response.status(201).json(images);
});

app.listen(3333);