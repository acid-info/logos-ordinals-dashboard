import { atom } from 'jotai'

export type Epoch = {
  display_order: number
  name: string
  epoch_blocks_total: number
  blocks_remaining: number
  epoch_blocks_completed: number
  starting_block_number: number
  ending_block_number: number
  claim_start_block_number: number
  claim_end_block_number: number
  xp_per_block: number
  is_current_epoch: boolean
  perc_remaining: number
  perc_completed: number
  est_time_remaining: string
}

export const epochsAtom = atom<Epoch[] | null>(null)
