import { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import tw from 'twin.macro'

// components
import AbilityController from '@/components/layout/hero-profile/AbilityController'
import Button from '@/components/common/Button'

// types
import { IHeroAbility, HeroAbilityKey } from '@/types/hero'

// contexts
import { HeroContext } from '@/contexts/HeroContextSection'

// hooks
import useAxiosData from '@/hooks/useAxiosData'

function HeroProfilePage() {
  const [profile, setProfile] = useState<IHeroAbility | null>(null)
  const [totalPoints, setTotalPoints] = useState(0)
  const [warnMessage, setWarnMessage] = useState<string | null>(null)
  const { heroId } = useParams()
  const { heroList } = useContext(HeroContext)

  // memos
  const isKnownHero = useMemo(() => {
    // Check router param is correct or not
    return heroList.find((hero) => hero.id === heroId)
  }, [heroList, heroId])

  // methods
  const abilityHandler = (ability: HeroAbilityKey, handler: 'plus' | 'minus') => {
    if (!profile) return

    if (remainingPoints === 0 && !warnMessage) {
      setWarnMessage('沒有可以分配的點數。')
    }

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

  const setDateToProfile = () => {
    if (!abilityData) return
    const profilePoints = getProfilePoints(abilityData)
    setProfile(abilityData)
    setTotalPoints(profilePoints)
  }

  const sendPoints = () => {
    if (remainingPoints !== 0) {
      setWarnMessage('還有剩餘點數未使用。')
      return
    }

    resetProfile(Boolean(heroId) && Boolean(profile))
  }

  const resetPoints = () => {
    setDateToProfile()
  }

  const resetToZero = () => {
    if (!profile) return

    const resetProfile = { ...profile }
    let ability: keyof IHeroAbility

    for (ability in resetProfile) {
      resetProfile[ability] = 0
    }

    setProfile(resetProfile)
  }

  const remainingPoints = useMemo(() => {
    if (!profile) return 0

    const profilePoints = getProfilePoints(profile)
    return totalPoints - profilePoints
  }, [totalPoints, profile])

  // api
  const { response: abilityData } = useAxiosData<IHeroAbility>(
    {
      url: `heroes/${heroId}/profile`,
      method: 'get',
    },
    [heroId, isKnownHero],
    Boolean(heroId) && Boolean(isKnownHero)
  )

  const { reFetchData: resetProfile } = useAxiosData<IHeroAbility>(
    {
      url: `heroes/${heroId}/profile`,
      method: 'patch',
      data: profile,
    },
    [],
    Boolean(heroId) && Boolean(profile)
  )

  // effects
  useEffect(() => {
    setDateToProfile()
  }, [abilityData])

  useEffect(() => {
    // If user still have points but have warnMessage, clear it
    if (remainingPoints > 0 && warnMessage) {
      setWarnMessage(null)
    }
  }, [remainingPoints])

  // intercept
  if (heroList.length === 0) {
    return
  }

  if (!isKnownHero) {
    return <h1 className="text-white font-bold text-3xl text-center">Who is he?</h1>
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
        <div className="text-white">
          {warnMessage && <p>{warnMessage}</p>}
          <h1 className="text-4xl font-bold mb-5">
            <span className="mr-5 underline">Remain</span> {remainingPoints}{' '}
            <span className="text-2xl">Points</span>
          </h1>
        </div>

        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-5 md:mb-0">
            <Button onClick={resetToZero} twStyle={tw`bg-gray-800 border-gray-800 mr-5`}>
              <h2 className="text-white font-bold text-2xl">TO ZERO</h2>
            </Button>
            <Button onClick={resetPoints} twStyle={tw`bg-gray-800 border-gray-800 mr-5`}>
              <h2 className="text-white font-bold text-2xl">RESET</h2>
            </Button>
          </div>
          <Button onClick={sendPoints} twStyle={tw`bg-white border-gray-800`}>
            <h2 className="text-gray-800 font-bold text-2xl">SEND</h2>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroProfilePage
