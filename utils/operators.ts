import {
  Group,
  ProcessedOperator,
} from '@/containers/Dashboard/DashboardContainer'
import { Archetype } from '../types/operators'

export function processOperators(
  data: Group[],
  selectedArchetypes: Archetype[],
): ProcessedOperator[] {
  const hasSelectedArchetypes = selectedArchetypes.length > 0

  return data?.flatMap((group) => {
    const groupArchetype = group.name.slice(0, -1) as Archetype

    const isSelectedArchetype = hasSelectedArchetypes
      ? selectedArchetypes.includes(groupArchetype)
      : true

    if (isSelectedArchetype) {
      return group.operators.map((operator) => ({
        id: operator.id.toString(),
        image: operator.image_400_jpeg_url,
        gif: operator.image_400_url,
        name: `OP ${operator.id}`,
        pointsPerHour: Math.floor(Math.random() * 500),
        isStaked: false,
        isPinned: false,
      }))
    }

    return []
  })
}

export function getRandomSubset<T>(array: T[], count: number): T[] {
  const shuffled = array?.sort(() => 0.5 - Math.random())
  return shuffled?.slice(0, count)
}
