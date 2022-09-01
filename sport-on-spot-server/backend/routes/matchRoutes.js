const express = require('express')
const router = express.Router()
const {
	getMatch,
	getAllMatches,
	finalizeMatch,
} = require('../controllers/matchController')

router.route('/').get(getAllMatches);
router.route('/:id').get(getMatch);
router.route('/finalize/:id').post(finalizeMatch);

module.exports = router
