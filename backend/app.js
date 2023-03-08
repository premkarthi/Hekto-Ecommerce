const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const product = require('./routes/product.js')

const app = express()
app.use(cors())

mongoose.connect('mongodb://127.0.0.1/e-Commerce')
.then(()=> console.log("Connection successful to DATABASE"))
.catch((errr) => console.error(`Couldn't able to mongoDB`, errr))

app.use(express.json())
app.use(product)

const port = process.env.PORT || 2000
app.listen(port, () => console.log(`Listening on port ${port}..`)); 