import Hero from '@/components/shared-components/hero'
import MinimalPortfolio from '@/components/shared-components/minimal-portfolio'
import Wave from '@/components/shared-components/wave'

export default function Home():JSX.Element {

  return (
    <div>
      <Hero />
      <Wave />
      <MinimalPortfolio />
    </div>
  )
}
