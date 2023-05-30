import Link from 'next/link'
import { ReactNode } from 'react'

type PortfolioSquareProps = {
  linkPath: string,
  img: ReactNode,
  title: ReactNode
}
      
export default function PortfolioSquare(props: PortfolioSquareProps) {
  return (
    <div className='hoverEffect m-3'>
      <Link className='portLink' href={props.linkPath}>
        <>{props.img}</>
        <div className='overlay'>
          <>{props.title}</>
        </div>
      </Link>
    </div>
  )
}


