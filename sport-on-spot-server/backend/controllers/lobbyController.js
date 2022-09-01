const asyncHandler = require('express-async-handler')

const Lobby = require('../models/lobbyModel')
const Sport = require('../models/sportModel')
const Team = require('../models/teamModel')
const Match = require('../models/matchModel')
const User = require('../models/userModel')

const getLobby = asyncHandler(async (req, res) => {
	const lobbies = await Lobby.findOne({ _id: req.params.id })
		.populate([{
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

	res.status(200).json(lobbies)
})

const getAllLobbies = asyncHandler(async (req, res) => {
	const lobbies = await Lobby.find()

	res.status(200).json(lobbies)
})

const searchLobby = asyncHandler(async (req, res) => {

	const lobbies = await Lobby.find({
		sport: await Sport.findOne({ _id: req.query.sport }),
		city: new RegExp(`${req.query.city}`)
	}).populate('homeTeam');

	res.status(200).json(lobbies)
})

// @desc    Set lobby
// @route   POST /api/lobbies
// @access  Private
const createLobby = asyncHandler(async (req, res) => {
	const lobby = await Lobby.create({
		sport: await Sport.findOne({ _id: req.body.sport }),
		homeTeam: await Team.findOne({ _id: req.body.homeTeam }),
		courtAvailable: req.body.courtAvailable,
		date: req.body.date,
		gameParts: req.body.gameParts,
		teamsFormat: req.body.teamsFormat,
		city: req.body.city,
		cityLongitude: req.body.cityLongitude,
		cityLatitude: req.body.cityLatitude,
		homeTeamContact: req.body.homeTeamContact,
		status: req.body.status
	})

	res.status(200).json(lobby)
})

const challengeLobby = asyncHandler(async (req, res) => {
	const lobby = await Lobby.findByIdAndUpdate(
		{ _id: req.body.lobby._id },
		{ guestTeam: req.body.guestTeam, guestTeamContact: req.body.guestTeamContact, status: 2 }
	);

	var match = await Match.create({
		lobby: lobby,
		sport: lobby.sport,
		homeTeam: lobby.homeTeam,
		guestTeam: req.body.guestTeam,
		status: 2,
		homeTeamScore: 0,
		guestTeamScore: 0,
		result: 1
	});

	match = await match.populate([{
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

	match.homeTeam.players.forEach(async playerId => {
		await User.findByIdAndUpdate(playerId, { $push: { matches: match._id } });
	});
	match.guestTeam.players.forEach(async playerId => {
		await User.findByIdAndUpdate(playerId, { $push: { matches: match._id } });
	});

	res.status(200).json(match);
})


module.exports = {
	getLobby,
	getAllLobbies,
	searchLobby,
	createLobby,
	challengeLobby
}
