import { ProjectCard } from '@/components/Docs/ProjectCard'
import { ProjectData } from '@/components/Docs/ProjectCard/types'
import styled from '@emotion/styled'
import React from 'react'

const projectsData: ProjectData[] = [
  {
    name: 'IFT',
    items: [
      { number: '1.', title: 'Website', link: 'https://free.technology/' },
      { number: '2.', title: 'X', link: 'https://x.com/InstituteFT' },
    ],
  },
  {
    name: 'Logos',
    items: [
      { number: '1.', title: 'Website', link: 'https://logos.co/' },
      { number: '2.', title: 'X', link: 'https://x.com/Logos_network' },
      { number: '3.', title: 'Discord', link: 'https://t.co/4jCZkP1Gmu' },
      {
        number: '3.',
        title: 'Logos Press Engine',
        link: 'https://press.logos.co/',
      },
    ],
  },
  {
    name: 'Operators',
    items: [
      {
        number: '1.',
        title: 'Operator Dashboard',
        link: 'https://dashboard.logos.co/',
      },
      { number: '2.', title: 'The Exit', link: 'https://exit.logos.co/' },
      { number: '3.', title: 'X', link: 'https://x.com/exit_operator' },
    ],
  },
  {
    name: 'Vac',
    items: [
      { number: '1.', title: 'Website', link: 'https://vac.dev/' },
      { number: '2.', title: 'X', link: 'https://x.com/vacp2p' },
      { number: '3.', title: 'Vac Forum', link: 'https://forum.vac.dev/' },
    ],
  },
  {
    name: 'Codex',
    items: [
      { number: '1.', title: 'Website', link: 'https://codex.storage/' },
      { number: '2.', title: 'X', link: 'https://x.com/Codex_storage' },
      {
        number: '3.',
        title: 'Github',
        link: 'https://github.com/codex-storage',
      },
    ],
  },
  {
    name: 'Waku',
    items: [
      { number: '1.', title: 'Website', link: 'https://waku.org/' },
      { number: '2.', title: 'X', link: 'https://x.com/waku_org' },
      { number: '3.', title: 'Github', link: 'https://github.com/waku-org' },
    ],
  },
  {
    name: 'Nomos',
    items: [
      { number: '1.', title: 'Website', link: 'https://nomos.tech/' },
      { number: '2.', title: 'X', link: 'https://x.com/Nomos_tech' },
      {
        number: '3.',
        title: 'Github',
        link: 'https://github.com/logos-co/nomos-node',
      },
    ],
  },
  {
    name: 'Keycard',
    items: [
      { number: '1.', title: 'Website', link: 'https://keycard.tech/' },
      { number: '2.', title: 'X', link: 'https://x.com/Keycard_' },
      {
        number: '3.',
        title: 'Github',
        link: 'https://github.com/status-im/status-keycard',
      },
    ],
  },
]

const DocsSection: React.FC = () => {
  return (
    <Container>
      <ProjectContainer>
        <ProjectGrid>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectGrid>
      </ProjectContainer>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`

const ProjectContainer = styled.div`
  margin-top: 65px;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 70px 16px;
  width: 100%;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`

export default DocsSection
