const asyncHandler = require('express-async-handler')

const Team = require('../models/teamModel')
const User = require('../models/userModel')

const getTeam = asyncHandler(async (req, res) => {
	const teams = await Team.find({ _id: req.body.id })

	res.status(200).json(teams)
})

const getAllTeams = asyncHandler(async (req, res) => {
	const teams = await Team.find()

	res.status(200).json(teams)
})

const createTeam = asyncHandler(async (req, res) => {
	if (!req.body.name) {
		res.status(400)
		throw new Error('Please add a team name')
	}

	const team = await Team.create({
		name: req.body.name,
		owner: req.user.id,
		players: req.body.players,
		winsCount: 0,
		drawsCount: 0,
		losesCount: 0,
		stars: 0,
		players: req.body.players || null
	})

	req.body.players.forEach(async playerId => {
		await User.findByIdAndUpdate({ _id: playerId }, { $push: { teams: team._id } });
	});

	res.status(200).json(team)
})

module.exports = {
	getTeam,
	getAllTeams,
	createTeam
}
