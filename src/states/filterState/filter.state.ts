import { hookstate, State, useHookstate } from '@hookstate/core'
import { localstored } from '@hookstate/localstored'
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

const filterState =
  typeof window === 'undefined'
    ? hookstate(defaultFilterState)
    : hookstate<FilterState>(defaultFilterState, localstored({ key: 'filter' }))

const wrapFilterState = (state: State<FilterState>) => ({
  filter: { ...state.value },
  get: () => state.value,
  setFilter: (value: FilterState) => state.set(value),
})

export const useFilterState = () => wrapFilterState(useHookstate(filterState))

export default useFilterState
