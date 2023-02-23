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

app.delete("/:index", (request, response) => {
    const { index } = request.params

    images.splice(index, 1);

    return response.status(200).json(images);
});

app.put("/:index", (request, response) => {
    const { index } = request.params
    const { text } = request.body

    images[index].title = text;
    
    return response.status(200).json(images);
});

app.listen(3333);