const express = require('express');

const app = express();

const connectDB = require('./config/db');


//init Middleware

app.use(express.json({extended: false}))

//connect Database

connectDB();


//intialize routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.get('/', (req, res) => res.json({msg: 'Hello World!!!'}))
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));