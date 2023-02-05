const express = require('express');
const {getUser,createUser,getAllUser,updateUser,deleteUser} = require('../controllers/userController')
const router = express.Router();



// get request
router.get('/',getAllUser)

// get specific request
router.get('/:id',getUser)

// post request
router.post('/',createUser)

// update request
router.patch('/:id',updateUser)

// delete request
router.delete('/:id',deleteUser)




module.exports = router;