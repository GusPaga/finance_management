class Helper {
	#day;
	constructor(day) {
		this.#day = day;
	}

	// this method is for getting the name or the month
	month = (day) => {
		try {
			const monthName = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			];
			const getNumber = new Date(day).getMonth();
			const month = monthName[getNumber];
			return month;
		} catch (error) {
			console.log({ error });
		}
	};
}

module.exports = Helper;
