import { Outlet, useParams } from 'react-router-dom'
import tw from 'twin.macro'

// components
import HeroCardsSection from '@/components/layout/HeroCardsSection/HeroCardsSection'
import Header from '@/components/layout/Header'

// // hooks
// import useAxiosData from '@/hooks/useAxiosData'

// // constants
// import { GET_HERO_API } from '@/constants/apis'

// // types
// import { IHeroInformation } from '@/types/hero'

// style
import { themeList } from '@/constants/style'

function HerosPage() {
  const { heroId } = useParams()
  const colorThemeIndex = themeList.findIndex((theme) => theme.id === heroId)
  const colorTheme =
    colorThemeIndex !== -1 ? themeList[colorThemeIndex].background : tw`bg-gray-900`

  // const { response: heroCards } = useAxiosData<Array<IHeroInformation>>({
  //   method: 'get',
  //   url: GET_HERO_API,
  // })

  return (
    <div
      className="w-screen h-full min-h-screen flex justify-center items-center flex-col px-3 py-14 transition-all duration-700"
      css={colorTheme}
    >
      {/* header */}
      <Header />
      {/* main section */}
      <HeroCardsSection />
      <Outlet />
    </div>
  )
}

export default HerosPage
