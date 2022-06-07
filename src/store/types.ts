export interface List {
  readonly key: string
  readonly name: string
  readonly description: string
  readonly people: Person[]
  readonly items: Item[]
}

export interface Person {
  readonly id: number
  readonly name: string
}

export interface Item {
  readonly id: number
  readonly title: string
  readonly amount: number
  readonly checked: boolean
  readonly peopleIDs: Person['id'][]
}

export interface StoreType {
  readonly list: List | null
  readonly currentListKey: List['key'] | null
}
