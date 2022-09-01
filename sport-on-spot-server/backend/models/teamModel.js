const mongoose = require('mongoose')

const teamSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		players: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: 'User'
		},
		winsCount: {
			type: Number,
		},
		drawsCount: {
			type: Number,
		},
		losesCount: {
			type: Number,
		},
		stars: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Team', teamSchema)
