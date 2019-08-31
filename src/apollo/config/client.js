import ApolloClient from 'apollo-boost';
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory'
import resolvers from '../resolvers';
import data from '../data';

const cache =  new InMemoryCache({
  dataIdFromObject: (object) => {
    switch(object.__typename){
      default:
        return defaultDataIdFromObject(object)
    }
  }
});

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache,
  resolvers
});

window.cache = client.cache.optimisticData.data

cache.writeData({data})

export {
  client
}