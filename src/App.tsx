import { useRoutes } from 'react-router-dom'

// routers
import { ROUTE_CONFIG } from './router/routes'

function App() {
  const element = useRoutes(ROUTE_CONFIG)

  return element
}

export default App
