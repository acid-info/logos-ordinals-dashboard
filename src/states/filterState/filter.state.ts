import { atom, useAtom } from 'jotai'
import {
  ARCHETYPE,
  BACKGROUND,
  COMP,
  HELMET,
  JACKET,
  SKIN,
} from '../../../constants/operators'
import { Archetype } from '../../../types/operators'

export type FilterState = {
  archetype: Archetype[]
  comp: string[]
  skin: string[]
  helmet: string[]
  jacket: string[]
  background: string[]
}

export const defaultFilterState: FilterState = {
  archetype: ARCHETYPE,
  comp: COMP,
  skin: SKIN,
  helmet: HELMET,
  jacket: JACKET,
  background: BACKGROUND,
}

export const filterAtom = atom<FilterState>(defaultFilterState)

const wrapFilterState = (
  filter: FilterState,
  setFilter: (value: FilterState) => void,
) => ({
  filter,
  get: () => filter,
  setFilter: (value: FilterState) => setFilter(value),
})

export const useFilterState = () => {
  const [filter, setFilter] = useAtom(filterAtom)
  return wrapFilterState(filter, setFilter)
}

export default useFilterState
