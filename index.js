const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dongha0917:123456789a@boilerplate.0rwgd.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("MongoDB Connected...."))
.catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello, world!'));

app.listen(port, () => console.log('listening on port ' + port));