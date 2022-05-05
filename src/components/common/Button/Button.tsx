import { ReactNode } from 'react'

function Button({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button className="bg-pink-300" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
