import { useRoutes } from 'react-router-dom'
import RouterIntercept from './router/intercept'

// routers
import { ROUTE_CONFIG } from './router/routes'

// contexts
import HeroContextSection from '@/contexts/HeroContextSection'

function App() {
  const element = useRoutes(ROUTE_CONFIG)

  return (
    <RouterIntercept>
      <HeroContextSection>{element}</HeroContextSection>
    </RouterIntercept>
  )
}

export default App
