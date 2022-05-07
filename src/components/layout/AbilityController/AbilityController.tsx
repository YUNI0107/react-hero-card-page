// components
import CircleButton from '@/components/common/CircleButton'
import AbilityBar from '../AbilityBar'

// types
import { HeroAbilityKey } from '@/types/hero'

function AbilityController({
  ability,
  abilityValue,
  totalValue,
  abilityHandler,
}: {
  ability: HeroAbilityKey
  abilityValue?: number
  totalValue?: number
  abilityHandler: (ability: HeroAbilityKey, handler: 'plus' | 'minus') => void
}) {
  const barPercent = totalValue && abilityValue ? (abilityValue / totalValue) * 100 : 0

  return (
    <div className="flex my-2 flex-col items-start md:flex-row md:items-center">
      <div className="flex items-center my-4 md:mr-3 md:my-0">
        <h2 className="text-white text-2xl px-5 py-1 bg-gray-800 mr-5 rounded-md">{ability}</h2>
        <CircleButton onClick={() => abilityHandler(ability, 'minus')}>
          <p className="text-xl font-bold leading-5">-</p>
        </CircleButton>
        <p className="text-white text-3xl font-bold mx-5">{abilityValue || 0}</p>
        <CircleButton onClick={() => abilityHandler(ability, 'plus')}>
          <p className="text-xl font-bold leading-5">+</p>
        </CircleButton>
      </div>

      <AbilityBar percent={barPercent} />
    </div>
  )
}

export default AbilityController
