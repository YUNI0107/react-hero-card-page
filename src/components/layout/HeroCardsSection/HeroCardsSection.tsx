import { useContext } from 'react'

// components
import HeroCards from '@/components/layout/HeroCards'

// contexts
import { HeroContext } from '@/contexts/HeroContextSection'

function HeroCardsSection() {
  const { heroList } = useContext(HeroContext)

  return (
    <div className="grid grid-cols-2 gap-4 w-full bg-white p-5 rounded-md my-4 border-gray-800 border-4 md:grid-cols-4">
      {heroList?.map((hero) => {
        return <HeroCards key={hero.id} hero={hero} />
      })}
    </div>
  )
}

export default HeroCardsSection
