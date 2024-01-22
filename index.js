import express from "express";
import mongoose from "mongoose";
import { addCar, changeCar, deleteCar, getAllCars, getOneCar } from "./controllers/cars.js";

const api = express()
api.use(express.json());

const passwordMongo = 'test123';

let mongoDBLink = `mongodb+srv://dilmurat:${passwordMongo}@back-end-cluster.1qwlwim.mongodb.net/`;

mongoose.connect(mongoDBLink)
	.then(() => console.log('Mongo DB успешно запущен'))
	.catch((err) => console.log('Ошибка при запуске Mongo DB', err));

const PORT = 4444;

api.get('/', (req, res) => {
	res.send('Hello, World!')
})


api.post('/cars', addCar)
api.patch('/cars/:id', changeCar)
api.delete('/cars/:id', deleteCar)
api.get('/cars', getAllCars)
api.post('/cars/:id', getOneCar)


api.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})