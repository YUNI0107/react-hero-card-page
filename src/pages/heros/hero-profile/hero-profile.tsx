import { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import tw from 'twin.macro'

// components
import AbilityController from '@/components/layout/AbilityController'
import Button from '@/components/common/Button'

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

  const resetPoints = () => {}

  // memos
  const isKnownHero = useMemo(() => {
    // Check router param is correct or not
    return heroList.find((hero) => hero.id === heroId)
  }, [heroList, heroId])

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
    return <h1 className="text-white font-bold text-2xl">Who is he?</h1>
  }

  return (
    <div className="w-full">
      <div>
        <AbilityController
          ability="str"
          abilityHandler={abilityHandler}
          abilityValue={profile?.str}
          totalValue={totalPoints}
        />
        <AbilityController
          ability="int"
          abilityHandler={abilityHandler}
          abilityValue={profile?.int}
          totalValue={totalPoints}
        />
        <AbilityController
          ability="agi"
          abilityHandler={abilityHandler}
          abilityValue={profile?.agi}
          totalValue={totalPoints}
        />
        <AbilityController
          ability="luk"
          abilityHandler={abilityHandler}
          abilityValue={profile?.luk}
          totalValue={totalPoints}
        />
      </div>

      <div className="flex items-center w-full flex-col mt-10 md:items-end">
        <h1 className="text-4xl text-white font-bold mb-5">
          <span className="mr-5 underline">Remain</span> {remainingPoints}{' '}
          <span className="text-2xl">Points</span>
        </h1>

        <div>
          <Button onClick={resetPoints} twStyle={tw`bg-gray-800 border-gray-800 mr-5`}>
            <h2 className="text-white font-bold text-2xl">RESET</h2>
          </Button>
          <Button onClick={resetPoints} twStyle={tw`bg-white border-gray-800`}>
            <h2 className="text-gray-800 font-bold text-2xl">SEND</h2>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroProfilePage
