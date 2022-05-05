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
    <div>
      <h2>{ability}</h2>

      <div>
        <Button onClick={() => abilityHandler(ability, 'minus')}>mins</Button>
        <p>{abilityValue || 0}</p>
        <Button onClick={() => abilityHandler(ability, 'plus')}>plus</Button>
      </div>
    </div>
  )
}

export default AbilityController
