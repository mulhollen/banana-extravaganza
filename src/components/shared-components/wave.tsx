import Image from 'next/image'

import { waveBlockTop, waveBlockBottom } from '@/img/Graphic'


export default function Wave() {
  return (
    <section>
        <div className='wave d-flex flex-column justify-content-center pt-5 display-4'>
          <Image src={waveBlockTop} className='vw-100' alt='' />
          <div className=' d-flex justify-content-center h-auto' style={{backgroundColor: '#A1CDF4'}}>
            <h1 className='bodyWidth h-auto m-0 px-5 text-align-center'>Lindsay Mulhollen is a dev manager, front-end developer, and artist with a love of user experience and accessibility.</h1>
          </div>
          <Image src={waveBlockBottom} className='vw-100' alt='' />
        </div>
    </section>
  )
}
