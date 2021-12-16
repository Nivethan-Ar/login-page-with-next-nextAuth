import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Nav from '../components/Nav'
import { getSession, useSession } from 'next-auth/react'
import Layout from '../components/layout'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const { data: session, status } = useSession()


  if (!session) { return <Layout>Access denied signin first</Layout> }
  return (
    <div className={styles.container}>

      <Nav />
      <main className={styles.main}>

        <div>HOME CONTENT</div>
        {loading && <h2>Loading.......</h2>}
      </main>

    </div>
  )
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context)

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: { session }
//   }
// }
