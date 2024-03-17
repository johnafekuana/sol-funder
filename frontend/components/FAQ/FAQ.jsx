'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Questions } from './Questions';

const FAQ = () => {
	// Initialize an array to store the open/closed state for each dropdown
	const [isOpen, setIsOpen] = useState(Array(Questions.length).fill(false));

	// Function to toggle the state of a specific dropdown based on its index
	const toggleMenu = (index) => {
		setIsOpen(prevState => {
			const newState = [...prevState]; // Create a copy of the previous state array
			newState[index] = !newState[index]; // Toggle the state of the specified dropdown
			return newState; // Return the updated state array
		});
	};

	return (
		<div className='mb-12'>
				<h1 className='title--text font-bold mb-8 text-3xl text-center pt-12'>FAQ</h1>
				{Questions.map((item, index) => (
					<div key={index} className="question--box py-2 px-4 w-2/3 mx-auto mb-2 border rounded shadow-sm">
						<p className='text-sm font-semibold flex justify-between items-center'>
							{item.question}
							<span>
								<Image
									className='cursor-pointer'
									src='/dropdown-icon.svg'
									alt='dropdown icon'
									width={10}
									height={10}
									onClick={() => toggleMenu(index)}
								/>
							</span>
						</p>
						{isOpen[index] && (
							<ul className="dropdown-menu">
								{item.options.map((option, index) => (
										<li className='text-sm p-2' key={index}>{option}</li>
								))}
							</ul>
						)}
					</div>
				))}
		</div>
	);
};

export default FAQ;


