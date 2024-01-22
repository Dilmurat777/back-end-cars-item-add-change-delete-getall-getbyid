import CarsModel from "../models/cars-model.js";

// add new car
export const addCar = async (req, res) => {
	try {
		const doc = new CarsModel(req.body)
		await doc.save()

		res.json({
			message: 'Машина добавлена',
			status: 'success'
		})
	} catch (error) {
		res.json({
			message: error.message,
			status: 'failed'
		})
	}
}

// change car
export const changeCar = async (req, res) => {
	try {
		const doc = await CarsModel.findByIdAndUpdate(req.params.id, req.body, {returnDocument: "after"})
		
		console.log(doc)

		res.json({
			message: 'Машина изменена',
			status: 'success'
		})
	} catch (error) {
		res.json({
			message: error.message,
			status: 'failed'
		})
	}
}

// delete car
export const deleteCar = async (req, res) => {
	try {
		await CarsModel.findOneAndDelete(req.params.id)
	
		res.json({
			message: 'Машина удалена',
			status: 'success'
		})
	} catch (error) {
		res.json({
			message: error.message,
			status: 'failed'
		})
	}
}

// get all cars
export const getAllCars = async (req, res) => {
	try {

		let filters = {}

		if (req.query.year) {
			filters.year = +req.query.year
		}

		if (req.query.isNew) {
			filters.isNew = +req.query.isNew
		}

		if (req.query.model) {
			filters.model = new RegExp(req.query.model, 'i')
		}

		const docs = await CarsModel.find(filters).sort(req.query.sort === 'desc' ? '-year' : req.query.sort === 'asc' ? 'year' : '0')
	
		res.json(docs)
	} catch (error) {
		res.json({
			message: error.message,
			status: 'failed'
		})
	}
}

// get one car
export const getOneCar = async (req, res) => {
	try {
		const doc = await CarsModel.findById(req.params.id)
		res.json(doc)
	} catch (error) {
		res.json({
			message: error.message,
			status: 'failed'
		})
	}
}