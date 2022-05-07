import { HeroContext } from '@/contexts/HeroContextSection'
import { useContext } from 'react'

// images
import HeroLogoImage from '@/assets/images/logo.png'
import { Link, useParams } from 'react-router-dom'

function Header() {
  const { heroList } = useContext(HeroContext)
  const { heroId } = useParams()
  const selectedHeroIndex = heroList.findIndex((hero) => hero.id === heroId)

  return (
    <div className="flex flex-col w-full md:flex-row md:items-center md:w-auto">
      <div className="w-32 border-2 mb-5 md:mr-5 md:mb-0 md:w-40">
        <Link to="/heros">
          <img className="w-full" src={HeroLogoImage} alt="logo" />
        </Link>
      </div>

      <div className="text-white">
        <h1 className="font-bold text-4xl">
          {selectedHeroIndex !== -1 ? heroList?.[selectedHeroIndex].name : 'PICK A HERO'}
        </h1>
        <p>You can help the hero arrange their ability points!</p>
      </div>
    </div>
  )
}

export default Header
