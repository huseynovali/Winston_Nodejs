const express = require('express');
const { db } = require('./config/dbConnect');
require('dotenv').config()
const app = express();
db.connect()
app.listen(5000,()=>console.log('listen'))