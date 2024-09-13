import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { ProjectData } from './types'

interface ProjectCardProps {
  project: ProjectData
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <CardWrapper>
      <ProjectTitle>{project.name}</ProjectTitle>
      <ItemList>
        {project.items.map((item, index) => (
          <ItemWrapper
            key={index}
            isLastItem={index === project.items.length - 1}
          >
            <ItemContent>
              <ItemNumber>{item.number}</ItemNumber>
              <ItemTitle>{item.title}</ItemTitle>
            </ItemContent>
            <Link href={item.link} target="_blank">
              <ItemIcon src={'/assets/link.svg'} alt="link" />
            </Link>
          </ItemWrapper>
        ))}
      </ItemList>
    </CardWrapper>
  )
}

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  font-family: Courier, sans-serif;
  font-weight: 400;

  @media (max-width: 991px) {
    margin-top: 28px;
  }
`

const ProjectTitle = styled.h2`
  color: rgb(var(--lsd-text-primary));
  font-size: 32px;
  line-height: 40px;
  margin: 0 0 32px;
`

const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const ItemWrapper = styled.li<{ isLastItem: boolean }>`
  background-color: var(--grey-900);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  color: rgb(var(--lsd-text-primary));
  margin-bottom: ${(props) => (props.isLastItem ? '0' : '2px')};
`

const ItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const ItemNumber = styled.span`
  width: 44px;
`

const ItemTitle = styled.span`
  font-size: 14px;
`

const ItemIcon = styled.img`
  width: 14px;
  height: 14px;
  object-fit: contain;
`

export default ProjectCard
