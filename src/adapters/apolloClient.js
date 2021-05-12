import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://172.17.176.1:8000/gql',
    cache: new InMemoryCache(),
})

export default client