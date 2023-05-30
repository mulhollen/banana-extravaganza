import Image from 'next/image'
import lmAbout from './lmAbout.png'
import littleLinds from './LittleLinds.png'
import lmLogo from './lmLogo.gif'
import lmLogoStill from './lmLogoStill.png'
import mattressFactory from './mattressFactory.jpg'
import nutcracker from './nutcracker.jpg'
import photoStrip from './photoStrip.jpg'
import pogo from './pogo.gif'
import squiggle from './squiggleLine.png'

type GeneralProps = {
  classes?: string
}

const defaultProps: GeneralProps = {
  classes: ''
}
      
function SquiggleLine(props: GeneralProps) {
  return <Image src={squiggle}  className={props.classes} alt='graphic horizontal wavy line' />
}
SquiggleLine.defaultProps = defaultProps;

function AboutLM(props: GeneralProps) {
  return <Image src={lmAbout} className={props.classes} alt='Illustration of woman holding a small tan dog on a yellow oval background. Woman has short brown hair and is wearing a denim jacket.' />
}

export { 
  AboutLM,
  littleLinds, 
  lmLogo, 
  lmLogoStill, 
  mattressFactory, 
  nutcracker, 
  photoStrip, 
  pogo, 
  SquiggleLine, 
}
