import { useContext, useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import tw from 'twin.macro'

// components
import HeroCardsSection from '@/components/layout/heros/HeroCardsSection/HeroCardsSection'
import Header from '@/components/layout/heros/Header'
import Footer from '@/components/layout/heros/Footer'
import LoadingSection from '@/components/common/LoadingSection'

// contexts
import { HeroContext } from '@/contexts/HeroContextSection'

// // hooks
import useGetResponse from '@/hooks/useGetResponse'

// // constants
import { GET_HERO_API } from '@/constants/apis'

// // types
import { IHeroInformation } from '@/types/hero'

function HerosPage() {
  const { heroId } = useParams()
  const { theme, setTheme, setHeroList } = useContext(HeroContext)

  const { response: heroCards, isLoading } = useGetResponse<Array<IHeroInformation>>({
    method: 'get',
    url: GET_HERO_API,
  })

  // effects
  useEffect(() => {
    setTheme(heroId)
  }, [heroId])

  useEffect(() => {
    if (heroCards) setHeroList(heroCards)
  }, [heroCards])

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
          {isLoading ? (
            <div className="my-20">
              <LoadingSection />
            </div>
          ) : (
            <HeroCardsSection />
          )}

          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HerosPage
