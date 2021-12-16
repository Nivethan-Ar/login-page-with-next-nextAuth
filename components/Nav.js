
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'

const Nav = () => {
  const { data: session, status } = useSession()

  if (!session) return null;
  return (
    <nav>
      <div>
        <span
          style={{ backgroundImage: `url('${session.user.image}')` }}
        />
        {/* <Image src="{session.user.image}" alt="profile" /> */}
        <h5>{session.user.name}</h5>
        <button className='text-capitalize' onClick={() => signOut()}>Logout</button>
      </div>
    </nav>
  )
}

export default Nav
