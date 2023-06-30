import Image from 'next/image'

import { AboutLM, lmLogoStill } from '@/img/General'

export default function About() {

  return (
    <div className='about bodyWidth d-flex justify-content-center mt-5 flex-column'>
      <div className='d-flex justify-content-center align-items-center about-div'>
        <AboutLM classes='widthBlock-50' />
        <div className='aboutWidth'>
          <h1 className='mb-4 nunito'>It&apos;s ya girl</h1>
          <p>
            Inspired to get a start in development after encountering interactive museum exhibits, I&apos;ve grown my passion for puzzle solving, brainstorming, and outside of the box thinking as a software engineer with a knack for front-end, usability, and accessibility. 
            <br />
            <br />                        
            I&apos;m excited to bring my unique background to your next project where I plan to make my mark with innovative thinking and motivation to tackle even the most unthinkable projects.
            <br />
            For fun you can catch me working on various art projects, learning whatever new skills are peaking my interest, and exploring museums and interactive experiences. 
          </p>
          <div className='w-100 d-flex pt-3 align-items-center'>
            <Image className='w-25 h-auto signature' src={lmLogoStill} alt='logo' />
          </div>
        </div>
      </div>
    </div>
  )
}
