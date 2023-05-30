import Image from 'next/image'

import coffeeGraphic from './coffeeGraphic.png'
import highFiveGraphic from './highFiveGraphic.png'
import iceCoffeeGraphic from './iceCoffeeGraphic.png'
import phoneGraphic from './phoneGraphic.png'
import wave from './waveGraphic.png'
import waveBlockTop from './wave-top.png'
import waveBlockBottom from './wave-bottom.png'
import squiggleYellow from './squiggleYellow.png'
import squiggleBlack from './squiggleBlack.png'

type GraphicsProps = {
  classes?: string
}

const defaultProps: GraphicsProps = {
  classes: ''
}
      
function WaveGraphic(props: GraphicsProps) {
  return <Image src={wave} alt='Illustration of waving hand with loopy arm' className={props.classes} />
}
WaveGraphic.defaultProps = defaultProps;

export {coffeeGraphic, highFiveGraphic, iceCoffeeGraphic, phoneGraphic, WaveGraphic, waveBlockTop, waveBlockBottom, squiggleYellow, squiggleBlack}