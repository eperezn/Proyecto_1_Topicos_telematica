const express = require('express');
const router = express.Router();
const mapController = require('../app/api/controllers/map');

router.get('/findLocations',mapController.search);
router.get('/findLocations/:id',mapController.searchname);
router.post('/saveLocation',mapController.save);
module.exports = router;