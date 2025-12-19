const express = require('express');
const path = require("path");
const fs = require("fs");
const cors = require('cors');
const productsPath = path.join(__dirname, "data", "data.json");
const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

function sortData(searchParam, items) {
    const sortedItems = []
    for (let elem of items) {
        if (elem.title.includes(searchParam)) {
            sortedItems.push(elem);
        }
    }
    return sortedItems
}

const port = 8080;


const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
}));


app.get('/api/product', async (req, res, next) => {
    const { pageNumber, pageSize, search } = req.query;
    let data;
    if (search) {
        data = sortData(search, products)
    } else {
        data = products
    }

    const start = Number(pageNumber) * Number(pageSize);
    const end = start + Number(pageSize);

    const items = data.slice(start, end);
    const total = data.length;
    console.log(pageNumber, pageSize,search )
    res.send({items, total});
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