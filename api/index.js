const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

 mongoose.connect('mongodb+srv://faridialiasghar5:9Z4CAhZddcPd7tqd@cluster0.st02y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try{
 const userDoc = await User.create({ 
    username,
    password: bcrypt.hashSync(password, salt)
 });
} catch(e){
    res.status(400).json({e});
}
    }) 


app.listen(4000)

// mongodb+srv://faridialiasghar5:9Z4CAhZddcPd7tqd@cluster0.st02y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// 9Z4CAhZddcPd7tqd