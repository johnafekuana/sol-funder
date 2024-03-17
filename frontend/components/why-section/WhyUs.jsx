import React from 'react'
import Image from 'next/image'
import { items } from './items'


const WhyUs = () => {
  return (
    <>

      <div className="main">

        <div>
          <h1 className='title--text font-bold mb-8 text-3xl text-center text-black'>Why Fundraise with SolFunder?</h1>
        </div>

        <div className="icon--title--desc flex flex-col items-center">

          {items.map((item, index) => (
            <div key={index}
              className='bubble--container bg-blue-100 shadow-md w-1/2 mx-auto py-2 mb-4 rounded-full text-center transition-transform transform hover:scale-105 hover:shadow-lg' style={{ width: 'fit-content' }} 
            >
              <div className="bubble--item">
                <Image
                  src={item.img}
                  width={30}
                  height={30}
                  alt={item.alt}
                />
              </div>
              <h2 className='font-bold text-2xl text-center'>{item.subtitle}</h2>
              <p className='mb-8 text-sm text-center text-gray-600 w-1/3 mx-auto' >
                {item.description}
              </p>
            </div>
          ))}

          
        </div>

      </div>
      
    
    </>
  )
}

export default WhyUs