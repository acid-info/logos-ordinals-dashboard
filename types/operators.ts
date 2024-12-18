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
  archetype__name: string
  archetype: string
  image_200_url: string
  image_200_jpeg_url: string
  image_400_url?: string
  image_400_jpeg_url?: string
  image_1024_url?: string
  image_1024_jpeg_url?: string
  image_2048_url?: string
  image_2048_jpeg_url?: string
  image_pixalated_url: string
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
  image_400?: string
  image_2048?: string
  name: string
  archetype: string
  gif: string
  gif_400?: string
  gif_2048?: string
  comp: string
  background: string
  skin: string
  helmet: string
  jacket: string
  pixelated?: string
  stakingXPPerBlock?: number
  isStaked?: boolean
  isPinned?: boolean
  generation?: string
}
