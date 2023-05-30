import Link from 'next/link'
import Image from 'next/image'

import { mainSquare } from '@/img/ArtInvestigator'
import { canvasCrop } from '@/img/Canvas'
import { ehSquare } from '@/img/EverythingHappens'
import { covidBannerLaptop } from '@/img/hStreamStore'

export default function Top8() {
  return (
    <section>
      <div className='myspace__blurbs mb-4'>
        <h3 className='m-0 mb-3 p-1 px-3 w-100 d-flex justify-content-between align-items-center'>
          Lindsay&apos;s Friend Space (Top 4)
          <Link href='/portfolio'>[view all]</Link>  
        </h3>
        <div className='pl-3'>
          <p><b>Lindsay has
          <b className='text-danger'> 4 </b>
          projects.</b></p>
        </div>
        <div className='px-3 d-flex w-100 myspace__blurbs--topDiv justify-content-between'>
          <Link href='/hstream-store' className='mr-3 d-flex flex-column justify-content-center align-items-center'>
            <h4>hStream Store</h4>
            <Image className='topImg' src={covidBannerLaptop} alt='Laptop computer opened to a healthcare education marketplace website with a banner for covid education' />
          </Link>
          <Link href='/art-investigator' className='mr-3 d-flex flex-column justify-content-center align-items-center'>
            <h4>Art Investigator</h4>
            <Image className='topImg' src={mainSquare} alt='iPad view of Art Investigator App home page with alligator illustration and buttons to get started' />
          </Link>
          <Link href='/canvas' className='mr-3 d-flex flex-column justify-content-center align-items-center'>
            <h4>Canvas</h4>
            <Image className='topImg' src={canvasCrop} alt='graphic of painters pallet with the word canvas' />
          </Link>
          <Link href='/everything-happens' className='d-flex flex-column justify-content-center align-items-center'>
            <h4>hStream Store</h4>
            <Image className='topImg' src={ehSquare} alt='Modern dancer in standing position with arms bent and raised, seated dancers and projections screens in background.' />
          </Link>
        </div>
      </div>
    </section>
  )
}



