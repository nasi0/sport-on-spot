const mongoose = require('mongoose')

const lobbySchema = mongoose.Schema(
	{
		sport: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Sport',
		},
		homeTeam: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Team',
		},
		courtAvailable: {
			type: Boolean,
		},
		date: {
			type: Date,
		},
		gameParts: {
			type: String,
		},
		teamsFormat: {
			type: String,
		},
		city: {
			type: String,
		},
		cityLongitude: {
			type: String,
		},
		cityLatitude: {
			type: String,
		},
		status: {
			type: Number,
		},
		homeTeamContact: {
			type: String
		},
		guestTeam: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Team',
		},
		guestTeamContact: {
			type: String
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Lobby', lobbySchema)
