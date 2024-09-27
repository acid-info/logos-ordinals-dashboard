import {
  Group,
  ProcessedOperator,
} from '@/containers/Dashboard/DashboardContainer'

export function processOperators(data: Group[]): ProcessedOperator[] {
  return data?.flatMap((group) =>
    group.operators.map((operator) => ({
      id: operator.id.toString(), // Convert ID to string
      image: operator.image_400_url,
      name: `OP ${operator.id}`,
      pointsPerHour: Math.floor(Math.random() * 500), // Random value for points per hour
      isStaked: false,
      isPinned: false,
    })),
  )
}

export function getRandomSubset<T>(array: T[], count: number): T[] {
  const shuffled = array?.sort(() => 0.5 - Math.random())
  return shuffled?.slice(0, count)
}
