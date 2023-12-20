const express =require('express');
const Admin = require('../controller/Admin');

const router = express.Router();


router.post('/',Admin.createUser)


module.exports =router