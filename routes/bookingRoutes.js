const express = require('express');
const {getBooking,createBooking,getAllBooking,updateBooking,deleteBooking} = require('../controllers/bookingController')
const router = express.Router();



// get request
router.get('/',getAllBooking)

// get specific request
router.get('/:id',getBooking)

// post request
router.post('/',createBooking)

// update request
router.patch('/:id',updateBooking)

// delete request
router.delete('/:id',deleteBooking)




module.exports = router;