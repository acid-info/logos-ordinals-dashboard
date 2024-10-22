export type Archetype =
  | 'Alchemist'
  | 'Artisan'
  | 'Explorer'
  | 'Illuminator'
  | 'Magician'
  | 'Memetic'
  | 'Oracle'
  | 'Outlaw'
  | 'Philosopher'
  | 'Polymath'

export interface Operator {
  id: number
  name: string
  archetype: string
  image_400_url: string
  image_400_jpeg_url: string
  comp: string
  background: string
  skin: string
  helmet: string
  jacket: string
}

export interface Group {
  id: number
  name: string
  operators: Operator[]
}

export interface ProcessedOperator {
  id: string
  image: string
  name: string
  archetype: string
  gif: string
  comp: string
  background: string
  skin: string
  helmet: string
  jacket: string
  pointsPerHour?: number
  isStaked?: boolean
  isPinned?: boolean
}
