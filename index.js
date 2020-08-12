require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_HOST, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }).then(() => console.log(`Database is running `));

let port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const todo = require("./router/todomanager");

app.use('/todo',todo);

app.listen( port, () => {
    console.log(`Server started on ${port}`);
});