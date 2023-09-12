import { useEffect, useState } from 'react';
import Services from '../Services';

const service = new Services();

export const useData = () => {
	const [data, setData] = useState();
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const response = await service.get();
		setData(response);
	};

	return {
		getData,
		data,
	};
};
