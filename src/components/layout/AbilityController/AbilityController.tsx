// components
import Button from '@/components/common/Button'

// types
import { HeroAbilityKey } from '@/types/hero'

function AbilityController({
  ability,
  abilityHandler,
}: {
  ability: HeroAbilityKey
  abilityHandler: (ability: HeroAbilityKey, handler: 'plus' | 'minus') => void
}) {
  return (
    <div>
      {ability}
      <Button onClick={() => abilityHandler(ability, 'minus')}>mins</Button>
      <Button onClick={() => abilityHandler(ability, 'plus')}>plus</Button>
    </div>
  )
}

export default AbilityController
