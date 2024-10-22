import { Archetype, Group, ProcessedOperator } from '../types/operators'

export function processOperators(
  data: Group[],
  selectedArchetypes: Archetype[],
): ProcessedOperator[] {
  const hasSelectedArchetypes = selectedArchetypes?.length > 0

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
        name: operator.name,
        comp: operator.comp,
        background: operator.background,
        skin: operator.skin,
        helmet: operator.helmet,
        jacket: operator.jacket,
        archetype: groupArchetype,
        isStaked: false,
        isPinned: false,
      }))
    }

    return []
  })
}

export function processMyOperators(operators: any[]) {
  if (!operators) {
    return []
  }

  return operators?.map((operator) => ({
    id: operator.id.toString(),
    arcgetypeId: operator.archetype_id,
    image: operator.image_400_jpeg_url,
    gif: operator.image_400_url,
    name: operator.name,
    pointsPerHour: operator.staking_xp_per_block,
    comp: operator.comp,
    background: operator.background,
    skin: operator.skin,
    helmet: operator.helmet,
    jacket: operator.jacket,
    archetype: operator.archetype,
    isStaked: operator.is_currently_staked,
    isPinned: operator.is_user_pinned,
  }))
}

export function getRandomSubset<T>(array: T[], count: number): T[] {
  const shuffled = array?.sort(() => 0.5 - Math.random())
  return shuffled?.slice(0, count)
}

export function getAllIds(groups: Group[]): number[] {
  const ids: number[] = []

  // Extract group IDs
  groups.forEach((group) => {
    ids.push(group.id)

    // Extract operator IDs within each group
    group.operators.forEach((operator) => {
      ids.push(operator.id)
    })
  })

  return ids
}

export function findOperatorById(
  operators: ProcessedOperator[],
  operatorId: number | string,
): ProcessedOperator | undefined {
  return operators.find(
    (operator) => String(operator.id) === String(operatorId),
  )
}

export function shuffleOperators(
  array: ProcessedOperator[],
): ProcessedOperator[] {
  for (let i = array?.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export function extractUniqueValues(data: any, field: string) {
  if (!data || !field) {
    return []
  }
  const uniqueValues = new Set()

  function traverse(item: any) {
    if (item[field]) {
      uniqueValues.add(item[field])
    }
    if (item.operators && Array.isArray(item.operators)) {
      item.operators?.forEach(traverse)
    }
  }

  data.forEach(traverse)

  return Array.from(uniqueValues)
}
