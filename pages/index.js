import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='bg-white'>
          <div>
            <h1 className="text-black text-3xl font-bold underline">
              Hello world!
            </h1>
          </div>
        </div>
      </main>

    </div>
  )
}
