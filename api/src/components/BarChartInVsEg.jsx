import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Balance mouth',
		},
	},
};

const profits = [20, 10, 15, 20, 25, 30, 35];
const loss = [5, 5, 3, 5, 7, 5, 2];
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
	labels,
	datasets: [
		{
			label: 'profits',
			data: profits,
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			label: 'loss',
			data: loss,
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
};

const BarChartInVsEg = () => {
	return <Bar options={options} data={data} />;
};

export default BarChartInVsEg;
