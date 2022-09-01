const express = require('express')
const router = express.Router()
const {
	getLobby,
	getAllLobbies,
	searchLobby,
	createLobby,
	challengeLobby
} = require('../controllers/lobbyController');
const { protect } = require('../middleware/authMiddleware');


router.route('/all').get(getAllLobbies);
router.route('/one/:id').get(getLobby);
router.route('/search').get(searchLobby);
router.route('/').post(protect, createLobby);
router.route('/challenge').post(protect, challengeLobby);

module.exports = router
