export interface ISection {
  id: number,
  url: string,
  title: string,
  content: string,
  image: string,
  sub_sections: ISubSection[]
}

export interface ISubSection {
  id: number,
  section: number,
  title: string,
  sub_title: string,
  content: string,
  image: string,
  date_created: string
}