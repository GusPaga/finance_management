import { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import Services from '../Services';
import './Modal.scss';

const service = new Services();

export const Form = ({ modal, toggle }, args) => {
	const [input, setInput] = useState({});

	const handleOnChange = (e) => {
		e.preventDefault();
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleClean = () => {
		toggle();
		setInput('');
		document.getElementById('formType').value = '';
		document.getElementById('formAmount').value = '';
		document.getElementById('formSector').value = '';
		document.getElementById('fromCategory').value = '';
		document.getElementById('formSubCategory').value = '';
	};

	const handleCreate = async (e) => {
		e.preventDefault();
		const response = await service.create(input);
		if (response.status === 400) {
			console.error(response);
		}
		if (response.status === 200) {
			console.log('ok');
		}
		console.log('response', response);
		handleClean();

		// console.log('input', input);
	};

	return (
		<Modal id='modal' isOpen={modal} toggle={toggle} {...args}>
			<ModalBody className='modal-body'>
				<h1 className='modal-title'>Nuevo Movimiento</h1>
				<div className='container'>
					<div className='row text-light rounded-4 my-2'>
						{/* DAY */}
						<div className='selectDay'>
							<div className='form-check'>
								<label>Día</label>
								<input
									className='form-select form-select-lg mb-3'
									type='date'
									name='day'
									onChange={(e) => handleOnChange(e)}
								/>
							</div>
						</div>
						{/* TYPE */}
						<div className='selectors'>
							<label>Tipo</label>
							<select
								className='form-select form-select-lg mb-3'
								id='formType'
								name='type'
								onChange={(e) => handleOnChange(e)}
							>
								<option>Seleciona un Tipo</option>
								<option value='egress'>Egreso</option>
								<option value='entry'>Ingreso</option>
							</select>
						</div>

						{/* SECTOR */}
						{input.type !== 'entry' && (
							<div className='selectors'>
								<label>Sector</label>
								<select
									className='form-select form-select-lg mb-3'
									name='sector'
									id='formSector'
									onChange={(e) => handleOnChange(e)}
								>
									<option>Seleciona un Sector</option>
									<option value='pets'>Mascota</option>
									<option value='home'>Casa</option>
									<option value='foods'>Alimentos</option>
									<option value='cards'>Tarjetas</option>
									<option value='health'>Salud</option>
									<option value='saving'>Ahorro</option>
									<option value='service'>Servicios</option>
									<option value='personal'>Personales</option>
									<option value='transport'>Transporte</option>
								</select>
							</div>
						)}

						{/* CATEGORY */}
						<div className='selectors'>
							{input.type === 'entry' && (
								<>
									<label>Categoría</label>
									<select
										className='form-select form-select-lg mb-3'
										name='category'
										id='formCategory'
										onChange={(e) => handleOnChange(e)}
									>
										<option>Seleciona una categoría</option>
										<option value='salary'>Salary</option>
										<option value='loans'>Loans</option>
										<option value='financial'>Financial</option>
										<option value='other entries'>Other</option>
									</select>
								</>
							)}

							{input.sector === 'cards' && (
								<>
									<label>Categoría</label>
									<select
										className='form-select form-select-lg mb-3'
										name='category'
										id='formCategory'
										onChange={(e) => handleOnChange(e)}
									>
										<option>Seleciona una categoría</option>
										<option value='visa'>Visa</option>
										<option value='master'>Master</option>
										<option value='others'>Otras</option>
									</select>
								</>
							)}
							{input.sector === 'pets' && (
								<>
									<label>Categoría</label>
									<select
										className='form-select form-select-lg mb-3'
										name='category'
										id='formCategory'
										onChange={(e) => handleOnChange(e)}
									>
										<option>Seleciona una categoría</option>
										<option value='foods'>Alimento</option>
										<option value='health'>Salud</option>
										<option value='others'>Otras</option>
									</select>
								</>
							)}

							{input.sector === 'foods' && (
								<>
									<label>Categoría</label>
									<select
										className='form-select form-select-lg mb-3'
										name='category'
										id='formCategory'
										onChange={(e) => handleOnChange(e)}
									>
										<option>Seleciona una categoría</option>
										<option value='bakery'>Pan</option>
										<option value='supermarket'>Super</option>
										<option value='meat'>Carnes</option>
										<option value='grocery'>Almacén</option>
										<option value='vegetables'>Verduras</option>
										<option value='others'>Otros</option>
									</select>
								</>
							)}

							{input.sector === 'health' && (
								<>
									<label>Categoría</label>
									<select
										className='form-select form-select-lg mb-3'
										name='category'
										id='formCategory'
										onChange={(e) => handleOnChange(e)}
									>
										<option>Seleciona una categoría</option>
										<option value='doctors'>Médicos</option>
										<option value='pharmacy'>Farmacia</option>
										<option value='others'>Otros</option>
									</select>
								</>
							)}

							{input.sector === 'savings' && (
								<>
									<label>Categoría</label>
									<select
										className='form-select form-select-lg mb-3'
										name='category'
										id='formCategory'
										onChange={(e) => handleOnChange(e)}
									>
										<option>Seleciona una categoría</option>
										<option value='saving'>Ahorro</option>
										<option value='investment'>Inversión</option>
										<option value='others'>Otros</option>
									</select>
								</>
							)}

							{input.sector === 'home' && (
								<>
									<label>Categoría</label>
									<select
										className='form-select form-select-lg mb-3'
										name='category'
										id='formCategory'
										onChange={(e) => handleOnChange(e)}
									>
										<option>Seleciona una categoría</option>
										<option value='fixes'>Arreglos</option>
										<option value='rental'>Alquiler</option>
										<option value='hardware store'>Ferretería</option>
										<option value='others'>Otros</option>
									</select>
								</>
							)}

							{input.sector === 'service' && (
								<>
									<label>Categoría</label>
									<select
										className='form-select form-select-lg mb-3'
										name='category'
										id='formCategory'
										onChange={(e) => handleOnChange(e)}
									>
										<option>Seleciona una categoría</option>
										<option value='butane'>Gas</option>
										<option value='electricity'>Luz</option>
										<option value='internet'>Internet</option>
										<option value='phone'>Teléfono</option>
										<option value='others'>Otros</option>
									</select>
								</>
							)}
							{input.sector === 'personal' && (
								<>
									<label>Categoría</label>
									<select
										className='form-select form-select-lg mb-3'
										name='category'
										id='formCategory'
										onChange={(e) => handleOnChange(e)}
									>
										<option>Seleciona una categoría</option>
										<option value='dress'>Indumentaria</option>
										<option value='gim'>Gimnasio</option>
										<option value='education'>Educación</option>
										<option value='gifts'>Regalos</option>
										<option value='hairdresser'>Peluquería</option>
										<option value='outlets'>Salidas</option>
										<option value='others'>Otros</option>
									</select>
								</>
							)}
							{input.sector === 'transport' && (
								<>
									<label>Categoría</label>
									<select
										className='form-select form-select-lg mb-3'
										name='category'
										id='formCategory'
										onChange={(e) => handleOnChange(e)}
									>
										<option>Seleciona una categoría</option>
										<option value='car'>Coche</option>
										<option value='public'>Público</option>
										<option value='others'>Otros</option>
									</select>
								</>
							)}
							{input.category === 'car' && (
								<>
									<label>Coche</label>
									<select
										className='form-select form-select-lg mb-3'
										name='subCategory'
										id='fromSubCategory'
										onChange={(e) => handleOnChange(e)}
									>
										<option>Seleciona una categoría</option>
										<option value='fuel'>Combustible</option>
										<option value='tax'>Impuestos</option>
										<option value='parking'>Estacionamiento</option>
										<option value='cleanup'>Limpieza</option>
										<option value='spares'>Repuestos</option>
										<option value='arrangements'>Arreglos</option>
										<option value='insurance'>Seguro</option>
									</select>
								</>
							)}
						</div>

						{/* AMOUNT */}
						<div className='selectors'>
							<label>Monto</label>
							<input
								className='form-select form-select-lg mb-3'
								name='amount'
								id='formAmount'
								placeholder='Ingresa un monto'
								onChange={(e) => handleOnChange(e)}
							></input>
						</div>
					</div>
					<div className='modal-button'>
						<Button color='primary' onClick={(e) => handleCreate(e)}>
							Guardar
						</Button>{' '}
						<Button color='secondary' onClick={toggle}>
							Cancel
						</Button>
					</div>
				</div>
			</ModalBody>
		</Modal>
	);
};
