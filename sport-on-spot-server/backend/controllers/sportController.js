const asyncHandler = require('express-async-handler')

const Sport = require('../models/sportModel')

// @desc    Get sports
// @route   GET /api/sports
// @access  Private
const getSport = asyncHandler(async (req, res) => {
	const sports = await Sport.findOne({ _id: req.body._id })

	res.status(200).json(sports)
})

// @desc    Get All sports
// @route   GET /api/sports
// @access  Private
const getAllSports = asyncHandler(async (req, res) => {
	const sports = await Sport.find()

	res.status(200).json(sports)
})

module.exports = {
	getSport,
	getAllSports,
}
