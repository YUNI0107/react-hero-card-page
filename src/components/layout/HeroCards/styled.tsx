import tw, { styled } from 'twin.macro'

const HeroContent = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full rounded-full bg-gray-800 overflow-hidden p-1`}

  &:before {
    content: '';
    transform: translate(-50%, -50%);
    animation: circle 4s linear infinite;
    ${tw`w-20 h-full absolute top-1/2 left-1/2 
        bg-gradient-to-b from-main-red-100 to-blue-500 transition-all duration-700`}
  }

  &:hover {
    &:before {
      ${tw`w-full`}
    }
  }

  @keyframes circle {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    0% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`

export const S = {
  HeroContent,
}
