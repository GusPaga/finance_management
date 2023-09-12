import { Form } from '../Modal/Modal';
import BarChartByCategory from '../BarChartByCategory';
import BarChartInVsEg from '../BarChartInVsEg';
import { useModal } from '../Services/useModal';
import { useData } from '../Services/useGet';

// const service = new Services();

export const Home = () => {
	const data = useData();
	const modal = useModal();

	console.log(data.data);

	return (
		<div className='container-fluid'>
			<div>
				<div className='my-3'>
					<button onClick={modal.toggle}>New Data</button>
				</div>
				<div className='row bg-light'>
					<div className='col-6'>
						<Form modal={modal.modal} toggle={modal.toggle} />
					</div>
					<div className='col-6 mb-5'>
						<div>
							<BarChartByCategory data={data} />
							<BarChartInVsEg />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
