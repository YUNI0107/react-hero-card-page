import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function RouterIntercept({ children }: { children: ReactNode | null }) {
  const location = useLocation()

  if (location?.pathname === '/') {
    // 如果路徑為 "/" ， 將使用者導向 "/heros" 頁面
    return <Navigate to="/heros" state={{ from: location }} replace />
  }

  return <>{children}</>
}

export default RouterIntercept
