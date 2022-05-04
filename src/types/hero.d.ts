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
