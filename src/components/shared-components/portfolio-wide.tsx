import Link from 'next/link';
import { ReactNode } from 'react'

type PortfolioWideProps = {
  linkPath: string,
  flip?: boolean,
  title: ReactNode,
  description: string,
  tools: string,
  img: ReactNode
}


export default function PortfolioWide(props: PortfolioWideProps) {
  return (
    <Link className='portLink' href={props.linkPath}>
    <div className={`d-flex justify-content-center yellow portWide ${props.flip && 'flip-reverse'}`}>
      <div className='d-flex flex-column justify-content-between h-100 flip-50 p-5'>
        <>{props.title}</>
        <p className='m-0'>{props.description}</p>
        <i className='text-muted mt-5'>{props.tools}</i>
      </div>
      <>{props.img}</>
    </div>
    </Link>
  )
}

