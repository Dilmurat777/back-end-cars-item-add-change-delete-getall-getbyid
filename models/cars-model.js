import mongoose from "mongoose";


const carsSchema = new mongoose.Schema({
	model: {
		type: String,
		require: true
	},
	year: {
		type: Number,
		require: true
	},
	color: {
		type: String,
		require: true
	},
	winCode: {
		type: String,
		require: true,
		unique: true
	},
	isNew: {
		type: Boolean,
		require: true
	},
	images: {
		type: Array,
		default: []
	},
	cover: String
}, {
	timestamps: true
})

export default mongoose.model('cars', carsSchema)