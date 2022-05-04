import { Outlet, useParams } from 'react-router-dom'

// hooks
import useAxiosData from '@/hooks/useAxiosData'

// constants
import { GET_HERO_API } from '@/constants/apis'

// types
import { IHeroInformation } from '@/types/hero'

// mocks TODO: Delete
import { heroList } from '@/mocks/hero'
import HeroCards from '@/components/layout/HeroCards'

function HerosPage() {
  const { heroId } = useParams()
  // const { response: heroCards } = useAxiosData<Array<IHeroInformation>>({
  //   method: 'get',
  //   url: GET_HERO_API,
  // })

  const heroCards = heroList

  return (
    <div>
      Heros {heroId}
      {heroCards?.map((hero) => {
        return <HeroCards key={hero.id} hero={hero} />
      })}
      <Outlet />
    </div>
  )
}

export default HerosPage
