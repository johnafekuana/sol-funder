import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    
			<footer className='footer--container bg-blue-900 flex w-full p-8 justify-between' >
				<div className="column--one">
					<h2 className='text-white text-sm font-bold mb-4'>GET TO KNOW ABOUT US</h2>
					<ul className='text-gray-300 text-xs font-bold '>
						<li>About Us</li>
						<li>Careers</li>
						<li>Blog</li>
						<li>SolFunder Stories</li>
						<li>Glassdoor</li>
					</ul>
				</div>
				<div className="column--two">
					<div className="top--col mb-8">
						<h2 className='text-white text-sm font-bold mb-4'>LET US HELP YOU</h2>
						<ul className='text-gray-300 text-xs font-bold'>
							<li>Accout Details</li>
							<li>Transaction History</li>
							<li>Help</li>
						</ul>
					</div>
					<div className="bottom--col">
						<h2 className='text-white text-sm font-bold mb-4'>GET THE APP</h2>
						<ul className='text-gray-300 text-xs font-bold'>
							<li>App Store</li>
							<li>Google Play</li>
						</ul>
					</div>
					
				</div>
				<div className="column--three">
					<h2 className='text-white text-sm font-bold mb-4'>DOING BUSINESS</h2>
					<ul className='text-gray-300 text-xs font-bold'>
						<li>Join the SolFunder Community</li>
						<li>Be A Partner</li>
					</ul>
				</div>
				<div className="column--four ">
					
					<div className="row--one flex mb-4">
						<div className="app--store flex items-center border rounded-lg py-2 px-4 mr-4 bg-gray-200 cursor-pointer">
							<Image
								className=''
								src='/iphone-appstore-icon.svg'
								alt='iphone appstore icon'
								width={30}
								height={30}
							/>
							<p>App Store</p>
						</div>
						<div className="google--play flex items-center border rounded-lg py-2 px-4 bg-gray-200 cursor-pointer">
							<Image
								className=''
								src='/google-play-icon.svg'
								alt='google play icon'
								width={30}
								height={30}
							/>
							<p>Google Play</p>
						</div>
					</div>
					<div className="row--two mb-4">
						<p className='text-gray-300 mb-4 text-sm'>Terms Of Service And Privacy</p>
						<p className='text-white text-sm font-bold'>&copy; 2024 SolFunder, All Rights Reserved</p>
					</div>
					<div className="row--three w-1/2 flex items-center border rounded-full p-1 bg-white cursor-pointer">
						<Image
							className='pl-1'
							src='/world-icon.svg'
							alt='world icon'
							width={25}
							height={25}
						/>
						<p className='ml-1 mr-8 text-xs font-bold'>English(US)</p>
						<Image
							className='cursor-pointer '
							src='/dropdown-icon.svg'
							alt='dropdown icon'
							width={10}
							height={10}
						/>
					</div>
				</div>
			</footer>
    
    </>
  )
}

export default Footer