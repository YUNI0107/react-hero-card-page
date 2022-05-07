import { useContext, useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import tw from 'twin.macro'

// components
import HeroCardsSection from '@/components/layout/HeroCardsSection/HeroCardsSection'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// contexts
import { HeroContext } from '@/contexts/HeroContextSection'

// // hooks
// import useAxiosData from '@/hooks/useAxiosData'

// // constants
// import { GET_HERO_API } from '@/constants/apis'

// // types
// import { IHeroInformation } from '@/types/hero'

function HerosPage() {
  const { heroId } = useParams()
  const { theme, setTheme } = useContext(HeroContext)

  // const { response: heroCards } = useAxiosData<Array<IHeroInformation>>({
  //   method: 'get',
  //   url: GET_HERO_API,
  // })

  // effects
  useEffect(() => {
    setTheme(heroId)
  }, [heroId])

  return (
    <div
      className="w-screen h-full min-h-screen flex justify-center items-center flex-col px-3 py-14 transition-all duration-700"
      css={theme ? theme.background : tw`bg-gray-900`}
    >
      <div className="flex-1 w-full flex justify-center items-center flex-col ">
        {/* header */}
        <Header />
        {/* main section */}
        <div className="w-full max-w-[1200px]">
          <HeroCardsSection />
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HerosPage
