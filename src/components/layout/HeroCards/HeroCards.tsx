import { IHeroInformation } from '@/types/hero'

function HeroCards({ hero }: { hero: IHeroInformation }) {
  const { id, name, image } = hero
  return (
    <div>
      {id} {name}
    </div>
  )
}

export default HeroCards
