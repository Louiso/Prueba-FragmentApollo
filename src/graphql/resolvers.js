import BookModel from "../functions/models/book";
import { BOOK_FRAGMENT } from "../functions/graphql/local";

const resolvers = {
  Mutation: {
    addBook: (_, args, context) => {
      BookModel.addBook(args, context)
      return {
        __typename: 'Book',
        title: null,
        author: null
      }
    },
    handleChangeBook: (_, { id }, { cache , getCacheKey }) => {
      const idBook = getCacheKey({
        __typename: 'Book',
        id: id
      })
      let book = cache.readFragment({ BOOK_FRAGMENT , id: idBook })
      const data = {
        ...book,
        author: 'José Armando'
      }
      cache.writeFragment({BOOK_FRAGMENT, id: idBook, data })  
      return {
        __typename: 'Book',
        title: null,
        author: null
      }
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
      console.log(context.cache.optimisticData.data)
    }
  }
  
}
export default newResolvers