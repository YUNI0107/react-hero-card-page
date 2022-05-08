import { useContext } from 'react'

// contexts
import { HeroContext } from '@/contexts/HeroContextSection'

// styled
import { S } from './styled'

function AbilityBar({ percent }: { percent: number }) {
  const { theme } = useContext(HeroContext)

  return (
    <div className="flex w-full">
      <div className="flex-1 h-5 p-1 bg-white rounded-lg">
        <S.BarInner percent={percent} background={theme && theme.background}></S.BarInner>
      </div>
      <h3 className="w-10 ml-5 text-white">{Math.floor(percent)} %</h3>
    </div>
  )
}

export default AbilityBar
