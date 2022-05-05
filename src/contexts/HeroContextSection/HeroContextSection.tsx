import { createContext, ReactNode, useState } from 'react'

// types
import { IHeroInformation } from '@/types/hero'

// mocks TODO: Delete
import { heroList } from '@/mocks/hero'

interface IHeroContext {
  heroList: Array<IHeroInformation>
  setHeroList: (list: Array<IHeroInformation>) => void
}

const defaultHero: IHeroContext = {
  heroList: heroList,
  setHeroList: () => {},
}

export const HeroContext = createContext<IHeroContext>(defaultHero)

function HeroContextSection({ children }: { children: ReactNode }) {
  const [heroList, setHeroList] = useState<Array<IHeroInformation>>(defaultHero.heroList)

  return (
    <HeroContext.Provider
      value={{
        heroList,
        setHeroList,
      }}
    >
      {children}
    </HeroContext.Provider>
  )
}

export default HeroContextSection
