import { ReactNode } from 'react'

function CircleButton({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button
      className="bg-white w-10 h-10 p-1 rounded-full flex justify-center items-center cursor-pointer transition hover:scale-110"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CircleButton
