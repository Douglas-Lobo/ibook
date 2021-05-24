export interface Categories {
  id: number
  name: string
}
export interface Pages {
  id: number
  name: string
}

export interface Book {
  id: number
  author: string
  releaseDate: string
  title: string
  description: string
  cover: string
  categories: Categories[]
  pages: Pages[]
}
