import { ReactNode } from 'react'

function Button({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return <button onClick={onClick}>{children}</button>
}

export default Button
