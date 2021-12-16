import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaGoogle, FaKey, FaMailBulk, FaMailchimp, FaRegEnvelope } from 'react-icons/fa'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='bg-white rounded-2xl shadow-2xl w-2/4'>
          <div className='p-5 m-4'>
            <div className="text-left font-bold"><span className='text-red-800'>TWC </span>INNOVATIONS</div>
            <div className="pt-6">
              <h2 className="text-3xl font-bold text-black mb-1 ">Sign in to Account </h2>
            </div>
            <div className="border-2 w-14 border-red-700 inline-block mb-2 rounded-full"></div>
            <div className="flex justify-center my-1">
              <a href="#" className='border-2 border-gray-200 hover:border-red-800 hover:text-red-800 rounded-full p-3 mx-1'>
                <FaGoogle className='text-sm' />
              </a>

              <a href="#" className='border-2 border-gray-200 hover:border-red-800 hover:text-red-800 rounded-full p-3 mx-1'>
                <FaMailBulk className='text-sm' />
              </a>
            </div>
            <p className='text-gray-500 my-5 text-sm'>or login using your email account</p>
            <div className='flex flex-col items-center gap-3'>
              <div className='bg-gray-100 w-64 p-2 flex items-center gap-2'>
                <FaRegEnvelope className='text-gray-400 m-1' />
                <input type="email" name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' />

              </div>
              <div className='bg-gray-100 w-64 p-2 flex items-center gap-2'>
                <FaKey className='text-gray-400 m-1' />
                <input type="password" name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />

              </div>
              <div>
                <a href="#" className='border-2 border-red-700 text-black rounded-full px-12 py-2 mt-2 inline-block font-semibold hover:bg-red-600 hover:text-white'>Sign In</a>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
