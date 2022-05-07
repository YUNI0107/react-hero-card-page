// components
import Button from '@/components/common/Button'

// types
import { HeroAbilityKey } from '@/types/hero'

function AbilityController({
  ability,
  abilityValue,
  abilityHandler,
}: {
  ability: HeroAbilityKey
  abilityValue?: number
  abilityHandler: (ability: HeroAbilityKey, handler: 'plus' | 'minus') => void
}) {
  return (
    <div className="flex items-center my-2">
      <h2 className="">{ability}</h2>

      <div className="flex items-center">
        <Button onClick={() => abilityHandler(ability, 'minus')}>
          <p className="text-xl font-bold">-</p>
        </Button>
        <p className="text-white text-3xl font-bold mx-5">{abilityValue || 0}</p>
        <Button onClick={() => abilityHandler(ability, 'plus')}>
          <p className="text-xl font-bold">+</p>
        </Button>
      </div>
    </div>
  )
}

export default AbilityController
