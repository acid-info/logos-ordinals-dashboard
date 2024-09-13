export interface ProjectItem {
  number: string
  title: string
  link: string
}

export interface ProjectData {
  name: string
  items: ProjectItem[]
}
