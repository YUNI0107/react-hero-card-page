import { createContext, ReactNode, useState } from 'react'

// types
import { IHeroTheme, IHeroInformation } from '@/types/hero'

// constants
import { themeList } from '@/constants/style'

interface IHeroContext {
  heroList: Array<IHeroInformation>
  setHeroList: (list: Array<IHeroInformation>) => void
  theme: IHeroTheme | null
  setTheme: (currentHeroId?: string) => void
}

const defaultHero: IHeroContext = {
  heroList: [],
  setHeroList: () => {},
  theme: null,
  setTheme: (currentHeroId?: string) => {
    console.log(currentHeroId)
  },
}

export const HeroContext = createContext<IHeroContext>(defaultHero)

function HeroContextSection({ children }: { children: ReactNode }) {
  const [heroList, setHeroList] = useState<Array<IHeroInformation>>(defaultHero.heroList)
  const [theme, setTheme] = useState<IHeroTheme | null>(null)

  const themeHandler = (currentHeroId?: string) => {
    const colorThemeIndex = themeList.findIndex((theme) => theme.id === currentHeroId)
    const colorTheme = colorThemeIndex !== -1 ? themeList[colorThemeIndex] : null
    setTheme(colorTheme)
  }

  return (
    <HeroContext.Provider
      value={{
        heroList,
        setHeroList,
        theme: theme,
        setTheme: themeHandler,
      }}
    >
      {children}
    </HeroContext.Provider>
  )
}

export default HeroContextSection
