const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name'],
		},
		email: {
			type: String,
			required: [true, 'Please add an email'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
		},
		profileImageUrl: {
			type: String,
		},
		matches: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: 'Match'
		},
		teams: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: 'Team'
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('User', userSchema)
