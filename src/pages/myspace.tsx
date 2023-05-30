import { User, Contact, Interests, Details, Schools, Status, Blurbs, Top8, Comments } from '@/components/parts'

export default function Myspace() {

  return (
    <div className='myspaceHolder'>
      <section className='myspace flip'>
        <div className='myspace__left'>
          <User />
          <Contact />
          <div className='mobile-only'>
            <Blurbs />
          </div>
          <div className='myspace__url desktop-only mb-3 mx-3'>
            <p className='m-0'><b>Myspace Url:</b></p>
            <p className='pl-2 m-0'>http://www.lindsaymulholen.com/myspace</p>
          </div>
          <Interests />
          <Details />
          <Schools />
        </div>
        <div className='myspace__right px-4'>
          <div className='desktop-only'>
            <Status />
          </div>
          <div className='desktop-only'>
            <Blurbs />
          </div>
          <Top8 />
          <Comments />
        </div>
      </section>
    </div>
  )
}