const express = require('express')
const router = express.Router()
const {
	getTeam,
	getAllTeams,
	createTeam
} = require('../controllers/teamController');
const { protect } = require('../middleware/authMiddleware');


router.route('/').get(getAllTeams);
router.route('/:id').get(getTeam);
router.route('/').post(protect, createTeam);

module.exports = router
