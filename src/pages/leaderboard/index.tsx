import { SEO } from '@/components/SEO'
import LeaderboardContainer from '@/containers/Leaderboard/LeaderboardContainer'

type PageProps = {}

export default function LeaderboardPage(props: PageProps) {
  return (
    <>
      <SEO pagePath="/leaderboard" />
      <LeaderboardContainer />
    </>
  )
}
