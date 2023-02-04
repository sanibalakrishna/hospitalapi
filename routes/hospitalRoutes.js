const express = require('express');
const {getAllHospital,getHospital,createHospital,updateHospital,deleteHospital,getHospitalByLocation} = require('../controllers/hospitalController')
const router = express.Router();


router.get('/location/:latitude&:longitude',getHospitalByLocation)
// get request
router.get('/',getAllHospital)

// get specific request
router.get('/:id',getHospital)

// post request
router.post('/',createHospital)

// update request
router.patch('/:id',updateHospital)

// delete request
router.delete('/:id',deleteHospital)

// get specific hospital in location


module.exports = router;