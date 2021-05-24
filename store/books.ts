import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Book } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

interface Show {
  id: Book['id']
}

@Module({
  name: 'books',
  stateFactory: true,
  namespaced: true,
})
export default class Books extends VuexModule {
  private books = [] as Book[]
  private book = {} as Book

  public get $all() {
    return this.books
  }

  public get $single() {
    return this.book
  }

  @Mutation
  private SET_SINGLE(book: Book) {
    this.book = book
  }

  @Mutation
  private SET_ALL(books: Book[]) {
    this.books = books
  }

  @Action
  public async index() {
    await $axios
      .$get('/books')
      .then((res) => {
        const books = res
        this.context.commit('SET_ALL', books)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  @Action
  public async show({ id }: Show) {
    await $axios
      .$get(`/books/${id}`)
      .then((res) => {
        const book = res
        this.context.commit('SET_SINGLE', book)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
