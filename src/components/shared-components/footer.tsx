import { Social } from './index'

export default function Footer() {
  return (
    <footer className='d-flex justify-content-between flip'>
      <p className='sans m-5'>&copy; lindsay mulhollen 2018 - {new Date().getFullYear()}</p>
      <div className='d-flex justify-content-center'>
        <Social />
      </div>
    </footer>
  )
}
