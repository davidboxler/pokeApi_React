import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import '../assets/css/Navigation.css'

export const Navigation = () => {
	const navigate = useNavigate()

	const [searchInput, setSearchInput] = useState();
	const updateInput = (e) => {
		let value = e.target.value;
		setSearchInput(value);
	}

	const searchData = (e) => {
		e.preventDefault()

		if (window.location.href.includes('search')) {
			navigate(`search?=${searchInput}`)
			window.location.reload();
		} else {
			navigate(`search?=${searchInput}`)
		}
	}

	console.log(searchInput)

	return (
		<>
			<header className='container'>
				<form noValidate autoComplete="off" onSubmit={searchData}>  
					<div className='form-group'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='icon-search'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
						<input
							type='text'
							onChange={updateInput}
							placeholder='Buscar nombre de pokemon'
						/>
					</div>

					<button type='submit' className='btn'>Buscar</button>
				</form>
			</header>

			<Outlet />
		</>
	);
};