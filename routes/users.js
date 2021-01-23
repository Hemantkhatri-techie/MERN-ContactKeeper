const express = require('express');

const router = express.Router();

//Signature for Routes
//@route         POST api/users
//@desc          Register a User
//@access        Public


router.post('/', (req,res) => {
    console.log("Register a User!!!");
})

module.exports = router;