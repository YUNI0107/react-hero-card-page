import { Outlet, useParams } from 'react-router-dom'

// contexts
import HeroContextSection from '@/contexts/HeroContextSection'

// components
import HeroCardsSection from '@/components/layout/HeroCardsSection/HeroCardsSection'

function HerosPage() {
  const { heroId } = useParams()

  return (
    <HeroContextSection>
      <div>
        Heros {heroId}
        <HeroCardsSection />
        <Outlet />
      </div>
    </HeroContextSection>
  )
}

export default HerosPage
