type VideoProps = {
  video: string
}
export default function Video(props: VideoProps) {
  return (
    <video id='myvid' loop autoPlay className='w-100'>
      <source src={props.video} type='video/mp4' />
    </video>
  )
}
