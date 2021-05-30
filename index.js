const express = require('express');
const app = express();
require('./models/dbConfig');
const postRoutes = require('./routes/postsController');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use('/posts', postRoutes);
app.listen(5500, () => console.log('Server started: 5500'));