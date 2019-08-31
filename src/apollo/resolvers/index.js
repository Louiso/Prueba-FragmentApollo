import gql from "graphql-tag";

const fragments = {
  book: gql`
    fragment BookDefaultFragment on Book {
      author,
      title,
      _id
    }
  `,
}

const GET_BOOKS = gql`
  query books{
    books {
      ...BookDefaultFragment
    }
  }
  ${fragments.book}
`

const GET_BOOK_SELECTED = gql`
  query bookSelected {
    bookSelected {
      ...BookDefaultFragment
    }
  }
  ${fragments.book}
`

const resolvers = {
  Mutation: {
    addBook: (_, { book }, { cache, client }) => {
      const { books } = cache.readQuery({
        query: GET_BOOKS
      })
      cache.writeQuery({
        query: GET_BOOKS,
        data: {
          books: [ ...books, book]
        }
      })
      return null
    },
    selectBook: (_, {_id} , { cache, client }) => {
      const { bookSelected } = cache.readQuery({
        query: GET_BOOK_SELECTED,
      })
      const book = cache.readFragment({
        fragment: fragments.book,
        id: `Book:${_id}`
      })
      cache.writeQuery({
        query: GET_BOOK_SELECTED,
        data: {
          bookSelected: {
            ...bookSelected,
            ...book
          }
        }
      })
    },
    updateBookSelected: (_, { book }, { cache , client }) => {
      const bookSelected = cache.readFragment({
        fragment: fragments.book,
        id: `Book:${book._id}`
      })
      cache.writeFragment({
        fragment: fragments.book,
        id: `Book:${book._id}`,
        data: {
          ...bookSelected,
          ...book
        }
      }) 
    }
  }
}
let newResolvers = {}
// eslint-disable-next-line no-unused-vars
for(const name in resolvers.Mutation){
  newResolvers.Mutation = {
    ...newResolvers.Mutation,
    [name]: (_,args, context) => {
      resolvers.Mutation[name](_,args,context)
      // console.log(context.cache.optimisticData.data)
    }
  }
  
}
export default newResolvers