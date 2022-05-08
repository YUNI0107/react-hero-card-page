import { useContext } from 'react'
import { useTransition, animated, config } from 'react-spring'

// components
import HeroCards from '@/components/layout/heros/HeroCards'

// contexts
import { HeroContext } from '@/contexts/HeroContextSection'

function HeroCardsSection() {
  const { heroList } = useContext(HeroContext)

  const transitions = useTransition(heroList, {
    from: { scale: 0, rotateZ: 90 },
    enter: { scale: 1, rotateZ: 0 },
    leave: { scale: 0, rotateZ: 180 },
    trail: 200,
    config: config.molasses,
  })

  return (
    <div className="grid grid-cols-2 gap-4 w-full bg-white p-5 rounded-md my-4 border-gray-800 border-4 md:grid-cols-4">
      {transitions((style, hero) => (
        <animated.div key={hero.id} style={{ ...style }}>
          <HeroCards hero={hero} />
        </animated.div>
      ))}
    </div>
  )
}

export default HeroCardsSection
