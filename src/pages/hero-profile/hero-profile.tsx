import { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

// components
import AbilityController from '@/components/layout/AbilityController'

// types
import { IHeroAbility, HeroAbilityKey } from '@/types/hero'

// contexts
import { HeroContext } from '@/contexts/HeroContextSection'

// mocks TODO: Delete
import { abilityMock } from '@/mocks/hero'

function HeroProfilePage() {
  const [profile, setProfile] = useState<IHeroAbility | null>(null)
  const [totalPoints, setTotalPoints] = useState(0)
  const { heroId } = useParams()
  const { heroList } = useContext(HeroContext)

  // methods
  const abilityHandler = (ability: HeroAbilityKey, handler: 'plus' | 'minus') => {
    if (!profile) return

    let abilityNewValue = profile[ability]
    if (handler === 'minus' && profile?.[ability] !== 0) {
      abilityNewValue -= 1
    } else if (handler === 'plus' && remainingPoints !== 0) {
      abilityNewValue += 1
    }

    setProfile({ ...profile, [ability]: abilityNewValue })
  }

  const getProfilePoints = (profile: IHeroAbility | null) => {
    if (!profile) return 0

    let ability: keyof IHeroAbility
    let profilePoints = 0

    for (ability in profile) {
      profilePoints += profile[ability]
    }

    return profilePoints
  }

  // memos
  const isKnownHero = useMemo(() => {
    // Check router param is correct or not
    return heroList.find((hero) => hero.id === heroId)
  }, [heroList])

  const remainingPoints = useMemo(() => {
    if (!profile) return 0

    const profilePoints = getProfilePoints(profile)
    return totalPoints - profilePoints
  }, [totalPoints, profile])

  useEffect(() => {
    const profilePoints = getProfilePoints(abilityMock)

    setProfile(abilityMock)
    setTotalPoints(10 + profilePoints)
  }, [])

  // intercept
  if (!isKnownHero) {
    return <p>Who is he?</p>
  }

  return (
    <div className="w-full">
      <div>
        <AbilityController
          ability="str"
          abilityHandler={abilityHandler}
          abilityValue={profile?.str}
        />
        <AbilityController
          ability="int"
          abilityHandler={abilityHandler}
          abilityValue={profile?.int}
        />
        <AbilityController
          ability="agi"
          abilityHandler={abilityHandler}
          abilityValue={profile?.agi}
        />
        <AbilityController
          ability="luk"
          abilityHandler={abilityHandler}
          abilityValue={profile?.luk}
        />
      </div>

      <div className="flex justify-end w-full">
        <div>
          <button>RESET</button>
          <button>SEND</button>
          <h1>Remain {remainingPoints}</h1>
        </div>
      </div>
    </div>
  )
}

export default HeroProfilePage
