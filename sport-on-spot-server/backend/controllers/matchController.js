const asyncHandler = require('express-async-handler')

const Match = require('../models/matchModel')

// @desc    Get matches
// @route   GET /api/matches
// @access  Private
const getMatch = asyncHandler(async (req, res) => {
	const match = await Match.findOne({ _id: req.params.id })
		.populate(['lobby', {
			path: 'homeTeam',
			populate: {
				path: 'players'
			}
		}, {
			path: 'guestTeam',
			populate: {
				path: 'players'
			}
		}])
	res.status(200).json(match)
})

// @desc    Get All matches
// @route   GET /api/matches
// @access  Private
const getAllMatches = asyncHandler(async (req, res) => {
	const matches = await Match.find()

	res.status(200).json(matches)
})

const finalizeMatch = asyncHandler(async (req, res) => {
	const updatedMatch = await Match.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	})

	res.status(200).json(updatedMatch)
});

module.exports = {
	getMatch,
	getAllMatches,
	finalizeMatch
}
