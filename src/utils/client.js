import ApolloClient, { gql } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory'

const cache =  new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache,
  resolvers: {
    Mutation: {
      addBook: (_, { id }, { cache , getCacheKey }) => {
        const idBook = getCacheKey({
          __typename: 'Book',
          id: id
        })
        const fragment = gql`
          fragment BookFragment on Book {
            author,
            title
          }
        `
        let book = cache.readFragment({ fragment , id: idBook })
        const data = {
          ...book,
          author: 'José Armando'
        }
        cache.writeFragment({fragment, id: idBook, data })  
        return {
          __typename: 'Book',
          title: null,
          author: null
        }
      }
    }
  }
});

const data = {
  books: [{
    __typename: 'Book',
    id: 0,
    author: 'Luis Alfredo',
    title: 'La Niebla'
  }]
}

cache.writeData({data})

// client.onResetStore(() => cache.writeData({ data }));

export {
  client
}