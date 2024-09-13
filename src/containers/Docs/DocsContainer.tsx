import { ProjectCard } from '@/components/Docs/ProjectCard'
import { ProjectData } from '@/components/Docs/ProjectCard/types'
import styled from '@emotion/styled'
import React from 'react'

const projectsData: ProjectData[] = [
  {
    name: 'IFT',
    items: [
      { number: '1.', title: 'Deck', link: 'https://logos.co' },
      { number: '2.', title: 'Whitepaper', link: 'https://logos.co' },
      { number: '3.', title: 'Github', link: 'https://logos.co' },
    ],
  },
  {
    name: 'Logos',
    items: [
      { number: '1.', title: 'Deck', link: 'https://logos.co' },
      { number: '2.', title: 'Whitepaper', link: 'https://logos.co' },
      { number: '3.', title: 'Github', link: 'https://logos.co' },
    ],
  },
  {
    name: 'Operators',
    items: [
      { number: '1.', title: 'Deck', link: 'https://logos.co' },
      { number: '2.', title: 'Whitepaper', link: 'https://logos.co' },
      { number: '3.', title: 'Github', link: 'https://logos.co' },
    ],
  },
  {
    name: 'Vac',
    items: [
      { number: '1.', title: 'Deck', link: 'https://logos.co' },
      { number: '2.', title: 'Whitepaper', link: 'https://logos.co' },
      { number: '3.', title: 'Github', link: 'https://logos.co' },
    ],
  },
  {
    name: 'Codex',
    items: [
      { number: '1.', title: 'Deck', link: 'https://logos.co' },
      { number: '2.', title: 'Whitepaper', link: 'https://logos.co' },
      { number: '3.', title: 'Github', link: 'https://logos.co' },
    ],
  },
  {
    name: 'Waku',
    items: [
      { number: '1.', title: 'Deck', link: 'https://logos.co' },
      { number: '2.', title: 'Whitepaper', link: 'https://logos.co' },
      { number: '3.', title: 'Github', link: 'https://logos.co' },
    ],
  },
  {
    name: 'Nomos',
    items: [
      { number: '1.', title: 'Deck', link: 'https://logos.co' },
      { number: '2.', title: 'Whitepaper', link: 'https://logos.co' },
      { number: '3.', title: 'Github', link: 'https://logos.co' },
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
