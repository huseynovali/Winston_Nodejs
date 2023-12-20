const express = require('express');
const { db } = require('./config/dbConnect');
const router = require('./router/UserRouter');
const cors = require('cors')
require('dotenv').config()
const app = express();
db.connect()
app.use(express.json())
app.use(cors())
app.use('/user',router)


app.listen(3000,()=>console.log('listen'))