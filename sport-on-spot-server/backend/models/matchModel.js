const mongoose = require('mongoose')

const matchSchema = mongoose.Schema(
	{
		lobby: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Lobby',
		},
		homeTeam: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Team',
		},
		guestTeam: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Team',
		},
		sport: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Sport',
		},
		status: {
			type: Number,
		},
		homeTeamScore: {
			type: Number,
		},
		guestTeamScore: {
			type: Number,
		},
		result: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Match', matchSchema)
