const express = require('express');
const path = require("path");
const fs = require("fs");

const productsPath = path.join(__dirname, "data", "data.json");
const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

const port = 8080;


const app = express();
app.use(express.json());

app.get('/api/product', async (req, res, next) => {
    const { pageNumber, pageSize } = req.query;
    const projects = await products.slice(pageNumber * pageSize, pageNumber + pageSize);
    const total = products.length;
    res.send({projects, total});
});

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Сервер запущен на http://localhost:${port}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start()