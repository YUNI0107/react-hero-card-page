import { useContext } from 'react'

// hooks
import useAxiosData from '@/hooks/useAxiosData'

// constants
import { GET_HERO_API } from '@/constants/apis'

// types
import { IHeroInformation } from '@/types/hero'

// components
import HeroCards from '@/components/layout/HeroCards'

// contexts
import { HeroContext } from '@/contexts/HeroContextSection'

function HeroCardsSection() {
  const { heroList } = useContext(HeroContext)
  // const { response: heroCards } = useAxiosData<Array<IHeroInformation>>({
  //   method: 'get',
  //   url: GET_HERO_API,
  // })

  return (
    <>
      {heroList?.map((hero) => {
        return <HeroCards key={hero.id} hero={hero} />
      })}
    </>
  )
}

export default HeroCardsSection
