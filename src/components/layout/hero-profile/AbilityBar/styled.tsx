import tw, { styled, TwStyle } from 'twin.macro'

const BarInner = styled.div`
  ${tw`h-full rounded-lg transition-all duration-1000`}
  ${(props: { background: TwStyle }) => props.background}
  width: ${(props: { percent: number }) => props.percent}%;
  filter: brightness(0.9);
`

export const S = {
  BarInner,
}
