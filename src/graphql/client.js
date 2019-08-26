import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory'
import resolvers from './resolvers';
import data from './data';

const cache =  new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache,
  resolvers
});

cache.writeData({data})

export {
  client
}