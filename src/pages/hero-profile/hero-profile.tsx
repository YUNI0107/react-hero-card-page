import { useState } from 'react'
import { useParams } from 'react-router-dom'

// components
import AbilityController from '@/components/layout/AbilityController'

// types
import { IHeroAbility, HeroAbilityKey } from '@/types/hero'

function HeroProfilePage() {
  const [profile, setProfile] = useState<IHeroAbility | null>(null)
  const { heroId } = useParams()

  const abilityHandler = (ability: HeroAbilityKey, handler: 'plus' | 'minus') => {
    console.log(ability, handler)
  }

  return (
    <div>
      <AbilityController ability="str" abilityHandler={abilityHandler} />
    </div>
  )
}

export default HeroProfilePage
