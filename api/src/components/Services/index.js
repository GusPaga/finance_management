const URL = 'http://localhost:3002';

class Services {
	get = async () => {
		try {
			const petition = await fetch(`${URL}`);
			if (!petition) {
				throw new Error('Is not any cattle to see');
			} else {
				const data = await petition.json();
				return data;
			}
		} catch (error) {
			console.log(error);
		}
	};

	create = async (input) => {
		console.log('input', input);
		try {
			const res = await fetch(`${URL}`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(input),
			});
			return res;
		} catch (error) {
			console.error(error);
			return error;
		}
	};
}
export default Services;
