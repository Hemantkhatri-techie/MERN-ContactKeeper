const express = require('express');

const router = express.Router();

//Signature for Routes

//@route         GET api/contacts
//@desc          Get all users contacts
//@access        Private
router.get('/', (req,res) => {
    console.log("Get all contacts!!!");
})

//@route         POST api/contacts
//@desc          Add new contacts
//@access        Private
router.post('/', (req,res) => {
    console.log("Add a Contact!!!");
})

//@route         PUT api/contacts
//@desc          Update a contact
//@access        Private
router.put('/:id', (req,res) => {
    console.log("Update a Contact!!!");
})

//@route         DELETE api/contacts
//@desc          Delete a contact
//@access        Private
router.post('/:id', (req,res) => {
    console.log("Delete a Contact!!!");
})

module.exports = router;