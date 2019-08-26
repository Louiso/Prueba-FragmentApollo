import { GET_BOOKS } from "../graphql/local";

class BookModel {
  static addBook = ({book}, { cache /* getCacheKey */ }) => {
    const {books} = cache.readQuery({query: GET_BOOKS })
    cache.writeQuery({
      query: GET_BOOKS,
      data: {
        books: [...books, book ]
      }
    })
  }
}

export default BookModel