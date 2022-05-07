import { TwStyle } from 'twin.macro'

export interface IHeroInformation {
  id: string
  name: string
  image: string
}

export interface IHeroAbility {
  str: number
  int: number
  agi: number
  luk: number
}
export type HeroAbilityKey = keyof IHeroAbility

export interface IHeroTheme {
  id: string
  background: TwStyle
}
