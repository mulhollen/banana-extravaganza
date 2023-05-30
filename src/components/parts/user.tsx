import Link from 'next/link'
import Image from 'next/image'

import { Status } from './index'

import { littleLinds } from '@/img/General'

export default function User() {
  return (
    <section>
      <div className='d-flex flip-small'>
        <div className='myspace__user m-3'>
          <h2>Lindsay Mulhollen</h2>
          <div className='d-flex flex-column'>
            <div className='d-flex mb-3'>
              <Image src={littleLinds} className='mr-3 profileImg' alt='Lindsay as a small child lounging in front of a toy computer' />
              <div className='d-flex flex-column'>
                <div className='h-100 d-flex flex-column justify-content-between'>
                  <div>
                    <p>&quot;:-)&quot;</p>
                    <p className='m-0'>She/They</p>
                    <p className='m-0'>Nashville,</p>
                    <p className='m-0'>TENNESSEE</p>
                    <p className='m-0'>United States</p>
                  </div>
                  <p className='m-0'>last login: 03/18/21</p>
                </div>
              </div>
            </div>
            <div>
              <p className='mb-0'><b>Mood:</b> busy EMOJI</p>
              <p className='mb-0'>View My: <Link href='/'>Pics</Link> | <a href='https://vimeo.com/50633850'>Videos</a></p>
            </div>
          </div>
        </div>
        <div className='mobile-only align-self-start'>
          <Status />
        </div>
      </div>
    </section>
  )
}


