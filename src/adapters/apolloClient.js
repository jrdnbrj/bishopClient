import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://172.31.112.1:8000/gql',
    cache: new InMemoryCache(),
})

export default client