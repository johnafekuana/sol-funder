import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='main--container'>
      <div className='section--one flex'>
        <div className='left--div w-1/2 h-screen flex flex-col pt-4'>
          <div className='logo--text flex pl-10 '>
            <h1 className="text-4xl font-bold blue--span ml-2">SolFunder</h1>
          </div>
          <div className='hero--image mx-auto my-auto p-2'>
            <Image
              className='rounded-full'
              src='/hero-pic.webp'
              alt='dispatch rider'
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className='right--div w-1/2 h-screen pt-2' style={{ backgroundColor: '#fefefe' }}>
          <div className='nav--menu flex pl-12'>
            <ul className='nav--list flex w-2/3 text-sm items-center justify-between'>
              <li className='lang--dropdown flex border rounded-full border-gray-300 p-1'>
                <Image
                  className='pl-1'
                  src='/world-icon.svg'
                  alt='world icon'
                  width={20}
                  height={20}
                />
                <p className='ml-1 mr-1'>English</p>
                <Image
                  src='/dropdown-icon.svg'
                  alt='dropdown icon'
                  width={7}
                  height={7}
                />
              </li>
              <li className='font-semibold'><p>Learn More</p></li>
              <li className='font-semibold'><p>FAQ</p></li>
              <li className='font-semibold'><p>Support</p></li>
              <li>
                <Link href='/sign-up'>
                  <p className='border font-bold px-4 py-2 rounded-full bg-blue-800 text-white cursor-pointer'>
                    Sign Up
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className='bottom--right px-12 mt-16'>
            <div className='hero--text'>
              <h1><span className='blue--span'>Scan </span>and Send.</h1>
              <h1><span className='blue--span'>Fundraise </span>on Solana.</h1>
              <p className='mt-6 text-sm'>Stay updated with our newsletters</p>
            </div>
            <div className='email--signUp w-full mt-4 '>
              <div className='email rounded-full shadow-sm text-gray-800'>
                <form className='flex w-full border rounded-full '>
                  <input className='w-full pl-4 py-2 outline-none rounded-l-full border-gray-300' type="email" placeholder="Enter your email" />
                  <input className='border w-1/3 py-2 rounded-full bg-blue-800 text-white font-semibold' type="submit" value="Subscribe" />
                </form>
              </div>
              <p className='agreement--text mt-4'>By clicking "Subscribe", I agree to the
                <Link href='' className='text-blue-600 font-bold'> Independent Contractor Agreement</Link> and have read the
                <Link href='' className='text-blue-600 font-bold'> terms and conditions.</Link>
              </p>
              <div className='mt-8 text-sm signup--login flex items-center'><p className='mr-2'>Already signed up?</p>
                <Link href='/login' >
                  <p className='font-bold text-sm blue--span hover:text-blue-800 cursor-pointer'>
                    Login to account
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
