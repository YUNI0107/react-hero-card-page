import { useRoutes } from 'react-router-dom'
import RouterIntercept from './router/intercept'

// routers
import { ROUTE_CONFIG } from './router/routes'

function App() {
  const element = useRoutes(ROUTE_CONFIG)

  return <RouterIntercept>{element}</RouterIntercept>
}

export default App
