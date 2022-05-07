import { ReactNode } from 'react'

function Button({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button
      className="bg-white w-4 h-4 p-4 rounded-full flex justify-center items-center"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
