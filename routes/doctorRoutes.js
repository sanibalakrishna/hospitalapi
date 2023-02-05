const express = require('express');
const {getDoctor,createDoctor,getAllDoctors,updateDoctor,deleteDoctor} = require('../controllers/doctorController')
const router = express.Router();



// get request
router.get('/',getAllDoctors)

// get specific request
router.get('/:id',getDoctor)

// post request
router.post('/',createDoctor)

// update request
router.patch('/:id',updateDoctor)

// delete request
router.delete('/:id',deleteDoctor)




module.exports = router;