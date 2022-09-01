const express = require('express')
const router = express.Router()
const {
	getSport,
	getAllSports,
} = require('../controllers/sportController')

router.route('/').get(getAllSports);
router.route('/:id').get(getSport);

module.exports = router
