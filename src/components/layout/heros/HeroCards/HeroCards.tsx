import { IHeroInformation } from '@/types/hero'
import { Link, useParams } from 'react-router-dom'
import tw from 'twin.macro'

// styled
import { S } from './styled'

function HeroCards({ hero }: { hero: IHeroInformation }) {
  const { id, name, image } = hero
  const { heroId } = useParams()
  const isSelected = heroId === hero.id

  return (
    <div
      className="flex justify-center items-center"
      css={[heroId && !isSelected && tw`opacity-50 hover:opacity-100`]}
    >
      <div className="relative w-full pt-[100%]">
        <S.HeroContent className="group safari-hidden">
          <S.HeroCircle className="group-hover:w-full" />
          <Link to={hero.id} className="w-full h-full" css={[isSelected && tw`cursor-default`]}>
            <div className="relative bg-white w-full h-full rounded-full z-10 p-2 transition duration-1000 hover:scale-90">
              <div className="relative w-full h-full z-20 rounded-full overflow-hidden">
                {/* middle section */}
                <div
                  className={`absolute w-full h-full justify-center items-center flex-col z-20 hidden 
                  ${!isSelected ? 'group-hover:flex' : ''}`}
                >
                  <h1 className="text-gray font-bold text-2xl hidden sm:block md:hidden">{name}</h1>
                  <button className="bg-gray-800 text-white px-5 py-2 rounded-sm transition-all duration-700 hover:tracking-widest">
                    Profile
                  </button>
                </div>

                {/* bottom section */}
                <div className="absolute bottom-0 h-1/3 w-full z-30 flex-col justify-center items-center bg-gray-900 hidden md:flex">
                  <h1 className="text-white font-bold text-xl">{name}</h1>
                  <p className="text-white">ID. {id}</p>
                </div>

                <img
                  className={`object-cover w-full h-full transition-opacity duration-700  
                  ${!isSelected ? 'group-hover:opacity-20' : ''}`}
                  src={image}
                  alt="picture"
                />
              </div>
            </div>
          </Link>
        </S.HeroContent>
      </div>
    </div>
  )
}

export default HeroCards
