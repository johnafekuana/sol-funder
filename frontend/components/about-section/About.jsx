import React from 'react'

const About = () => {
  return (
    <>
			<div className='bg-blue-100 text-gray-600 mb-8'>
				<h1 className='about--title--text font-bold pt-4 mb-6 text-3xl text-center text-black'>What is SolFunder?</h1>
				<p className='w-1/2 text-center mx-auto mb-6 text-sm'>
					Operating in over Y cities across X countries, SolFunder is a platform dedicated to simplifying cryptocurrency 
					fundraising, enabling users to effortlessly receive SOL tokens for their campaigns. We empower individuals and 
					organizations to manage their fundraising efforts efficiently while providing full control over how they 
					receive contributions. 
					We call our local business users <span className='font-bold'>SolFunders</span>.
				</p>
				<p className='w-1/2 text-center mx-auto pb-8 text-sm'>
					SolFunders can easily navigate through various fundraising campaigns, assessing their performance, fulfillment rate, 
					reviews, and ratings. This transparency motivates contributors to participate and support campaigns, fostering a vibrant 
					fundraising ecosystem. Ultimately, SolFunder drives accessibility and efficiency in fundraising, benefiting both campaign 
					organizers and contributors alike.
				</p>
			</div>
      
    </>  
  )
}

export default About