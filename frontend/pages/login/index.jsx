import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css'

const Page = () => {
  return (
    <>
      <div className="signup--main--container flex">
        <div className="left--container w-1/2 h-screen flex flex-col">
          <Link href='/'>
            <div className='logo--text flex pl-10 mb-16 pt-4'>
              <h1 className="text-4xl cursor-pointer font-bold blue--span ml-2">SolFunder</h1>
            </div>
          </Link>
          <Image
            className='mx-auto'
            src='/signup-illustration.jpg'
            alt='signup illustration photo'
            width={400}
            height={400}
          />
        </div>
        <div className="right--container w-1/2 mx-auto flex flex-col items-center bg-gray-100">
          <h1 className='text-center font-bold text-lg mb-6 mt-2'>Login</h1>
          <form action="" className='w-1/2' >
            <div className="email mb-4">
              <p className='text-xs pb-1'>Email Address</p>
              <input
                className='border w-full text-xs p-2 outline-blue-700 rounded-lg'
                type="email"
                placeholder='Enter your email'
              />
            </div>
            <div className="password mb-4 flex flex-col">
              <p className='text-xs pb-1'>Password</p>
              <input
                className='border w-full text-xs p-2 outline-blue-700 rounded-lg'
                type="password"
                placeholder='Enter your password'
              />
              <p className='text-xs text-blue-700 pt-1 flex justify-end cursor-pointer'>Forgot password?</p>
            </div>
            <div className="signup--button">
              <Link href='/profile'>
                <button
                  className='border w-full py-2 text-xs font-bold rounded-lg mt-4 cursor-pointer text-white bg-blue-700'
                >
                  Login
                </button>
              </Link>
            </div>
            <h1 className='signup--option--OR text-center text-bold mt-4'>OR</h1>
            <div className="use--google mt-2 flex justify-center items-center bg-white shadow-sm rounded-lg cursor-pointer">
              <Image
                className='mr-2'
                src='/google-icon.svg'
                alt='google icon'
                width={20}
                height={20}
              />
              <p className='py-2 pl-2 text-xs font-bold'>Continue with Google</p>
            </div>
            <div className="use--wallet mt-4 flex justify-center items-center cursor-pointer">
              <WalletMultiButton 
                className='connect--wallet-button'>
                <span 
                  className="w-full h-8 flex items-center justify-center text-xs bg-blue-700 text-white rounded-lg px-4 hover-blue">
                    Continue with Wallet
                </span>
              </WalletMultiButton>
            </div>
            <div className="existing--user--option">
              <div className='flex justify-center items-center mt-4'>
                <p className='text-xs'>Don&apos;t have an account yet?</p>
                <Link href='/sign-up'><p className='text-xs font-bold pl-1 text-blue-700 cursor-pointer'>Sign up</p></Link>
              </div>
            </div>
            <p className='text-center mt-8 text-xs'>By creating an account you agree to our <span className='font-bold text-blue-700 cursor-pointer'>Terms of Service </span>and <span className='font-bold text-blue-700 cursor-pointer'>Privacy Policy</span></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Page
