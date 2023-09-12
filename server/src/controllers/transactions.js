const Cash = require('../models/cash.model');
const Helper = require('../helpers');

const helper = new Helper();

class Registry {
	// declare variables
	#day;
	#week;
	#type;
	#month;
	#sector;
	#amount;
	#category;

	constructor(day, week, type, month, sector, amount, category) {
		// reference variables
		this.#day = day;
		this.#week = week;
		this.#type = type;
		this.#month = month;
		this.#sector = sector;
		this.#amount = amount;
		this.#category = category;
	}

	create = async (req, res) => {
		try {
			const { day, type, sector, amount, category } = req.body;

			const month = helper.month(day);

			await Cash.create({
				day,
				type,
				month,
				sector,
				amount,
				category,
			});
			res.status(200).send('New Register was successfully created');
		} catch (error) {
			console.log('Error in createRegister', error);
			res.status(400).send(`error:${error}`);
		}
	};

	getAll = async (req, res) => {
		try {
			const data = await Cash.find();
			res.status(200).send(data);
		} catch (error) {
			console.log('Error in getAllData', error);
			res.status(400).send(`error:${error}`);
		}
	};

	getEgressMonth = async (req, res) => {
		const filter = {
			type: 'egress',
			month: 'agosto',
		};
		const egress = await Cash.find(filter);
		const total = egress.reduce((accumulator, obj) => {
			return accumulator + obj.amount;
		}, 0);
		res.status(200).send({ total });
	};
}
module.exports = Registry;
