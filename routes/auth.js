const express = require('express');

const router = express.Router();

//Signature for Routes

//@route         GET api/users
//@desc          Get logged in User
//@access        Private

router.get('/', (req,res) => {
    console.log("Get logged in User!!!");
})

//@route         POST api/users
//@desc          Auth User and get token
//@access        Public

router.post('/', (req,res) => {
    console.log("Login User!!!");
})