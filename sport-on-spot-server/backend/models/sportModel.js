const mongoose = require('mongoose')

const sportSchema = mongoose.Schema(
	{
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: true,
		},
		gameParts: {
			type: Array,
			required: true,
		},
		teamsFormat: {
			type: Array,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Sport', sportSchema)
