import { useContext } from 'react'
import tw from 'twin.macro'

// contexts
import { HeroContext } from '@/contexts/HeroContextSection'

// styled
import { S } from './styled'

function AbilityBar({ percent }: { percent: number }) {
  const { theme } = useContext(HeroContext)

  return (
    <div className="flex w-full">
      <div className="flex-1 h-5 p-1 bg-white rounded-lg">
        <S.BarInner
          percent={percent}
          background={theme ? theme.background : tw`bg-gray-900`}
        ></S.BarInner>
      </div>
      <h3 className="w-12 ml-5 text-white">{Math.round(percent)} %</h3>
    </div>
  )
}

export default AbilityBar
