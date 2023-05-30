import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { lmLogo, lmLogoStill } from '@/img/General'


export default function Nav() {
  const [logo, setLogo] = useState(lmLogoStill);

  useEffect(()=> {
    setLogo(lmLogo);
  }, []);

  return (
    <nav className='boxshadow d-flex flex-row justify-content-between py-4'>
      <div className='align-items-center '>
        <Link href='/' className='logo'>
          <Image className='mobile-nav' src={logo} alt='logo' onMouseEnter={() => setLogo(lmLogo)} onMouseLeave={() => setLogo(lmLogoStill)} />
        </Link>
      </div>
      <div className='lilNav'>
      <Link className='nav-link mx-4' href='/portfolio'>PORTFOLIO</Link>
      <Link className='nav-link mx-4' href='/about'>ABOUT</Link>
      <Link className='nav-link mx-4' href='https://www.linkedin.com/in/mulhollen/'>RESUME</Link>
      </div>
    </nav>      
  )
}


