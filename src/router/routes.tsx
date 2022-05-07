// types
import { RouteObject } from 'react-router-dom'

// components
import HerosPage from 'src/pages/heros/heros'
import HeroProfilePage from '@/pages/heros/hero-profile'
import NotFoundPage from 'src/pages/not-found'

export const ROUTE_CONFIG: Array<RouteObject> = [
  {
    path: '/',
    element: <HerosPage />,
  },
  {
    path: '/heros',
    element: <HerosPage />,
    children: [{ path: ':heroId', element: <HeroProfilePage /> }],
  },
  { path: '*', element: <NotFoundPage /> },
]
