import { ReactNode } from 'react'
import { TwStyle } from 'twin.macro'

function Button({
  children,
  onClick,
  twStyle,
}: {
  children: ReactNode
  onClick: () => void
  twStyle?: TwStyle
}) {
  return (
    <button
      className="px-5 py-1 rounded-md border-4 transition-all hover:scale-110"
      css={[twStyle]}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
