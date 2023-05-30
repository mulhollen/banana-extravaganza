import Image from 'next/image'

export default function ContactLinks() {
  const sadFace = ':(';
  return (
    <section>
      <div className='d-flex px-2'>
        <div className='d-flex flex-column w-50'>
          <a href={`mailto:lindsaymulhollen@gmail.com`} className='pb-1'>
            <Image src='https://static.spacehey.net/icons/comment.png' className='mr-1' aria-hidden='true' loading='lazy' alt='&quot;Comment&quot; Icon' />
            Send Message
          </a>
          <a href='https://www.linkedin.com/in/mulhollen/' target='_blank' rel='noreferrer' className='pb-1'>
          <Image src='https://static.spacehey.net/icons/add.png' className='mr-1' aria-hidden='true' loading='lazy' alt='&quot;Add&quot; Icon' />
            Add to Friends
          </a>
          <a href={`mailto:lindsaymulhollen@gmail.com`} className='pb-1'>
          <Image src='https://static.spacehey.net/icons/email.png' className='mr-1' aria-hidden='true' loading='lazy' alt='&quot;Email&quot; Icon' />
            Instant Message
          </a>
          <a href='https://www.linkedin.com/in/mulhollen/' target='_blank' rel='noreferrer' className='pb-1'>
          <Image src='https://static.spacehey.net/icons/group_add.png' className='mr-1' aria-hidden='true' loading='lazy' alt='&quot;Group_add&quot; Icon' />
            Add to Group
          </a>
        </div>
        <div className='d-flex flex-column w-50'>
          <button className='pb-1' onClick={() => {navigator.clipboard.writeText('lindsaymulhollen.com')}}>
          <Image src='https://static.spacehey.net/icons/arrow_right.png' className='mr-1' aria-hidden='true' loading='lazy' alt='&quot;Arrow_right&quot; Icon' />
            Forward to Friend
          </button>
          <a href='https://www.linkedin.com/in/mulhollen/' target='_blank' rel='noreferrer' className='pb-1'>
          <Image src='https://static.spacehey.net/icons/award_star_add.png' className='mr-1' aria-hidden='true' loading='lazy' alt='&quot;Award_star_add&quot; Icon' />
            Add to Favorites
          </a>
          <button className='pb-1' onClick={() => {alert(`${sadFace}`)}}>
          <Image src='https://static.spacehey.net/icons/exclamation.png' className='mr-1' aria-hidden='true' loading='lazy' alt='&quot;Exclamation&quot; Icon' />
            Block User
          </button>
          <a href='https://www.linkedin.com/in/mulhollen/' target='_blank' rel='noreferrer' className='pb-1'>
          <Image src='https://static.spacehey.net/icons/flag_red.png' className='mr-1' aria-hidden='true' loading='lazy' alt='&quot;Flag_red&quot; Icon' />
            Rank User
          </a>
        </div>
      </div>
    </section>
  );
}



