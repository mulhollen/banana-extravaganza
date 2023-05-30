import Image from 'next/image'
import { WaveGraphic } from '@/img/Graphic'
import { squiggleBlack } from '@/img/Graphic'

export default function Hero() {
  return (
    <section className='bodyWidth'>
      <svg className="position-absolute vw-100 zindex-offcanvas-backdrop" style={{left: 0}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#2FAA69" fillOpacity="1" d="M0,0L18.5,37.3C36.9,75,74,149,111,192C147.7,235,185,245,222,218.7C258.5,192,295,128,332,112C369.2,96,406,128,443,138.7C480,149,517,139,554,149.3C590.8,160,628,192,665,224C701.5,256,738,288,775,277.3C812.3,267,849,213,886,202.7C923.1,192,960,224,997,245.3C1033.8,267,1071,277,1108,272C1144.6,267,1182,245,1218,208C1255.4,171,1292,117,1329,117.3C1366.2,117,1403,171,1422,197.3L1440,224L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path>
      </svg>
   
      <div className='position-relative'>
        <div className='d-flex w-100 h-100 waveDiv'>
          <WaveGraphic classes='flex-grow-1 h-auto waveHero' />
          <div className=' d-flex flex-column heroTextHolder h-auto'>
            <h2 className='display-6 mb-0'>Hi, I&apos;m Lindsay! Let&apos;s build something awesome together.</h2>
            <Image src={squiggleBlack} alt='' className='w-100 h-auto' />
          </div>
        </div>
      </div>
    </section>
  )
}
