import ApolloClient from 'apollo-boost';
import { defaults, resolvers } from './LocalState';

// 작고 간단한 implementation
export default new ApolloClient({
    uri: "http://localhost:4000",
    clientState: {
        defaults,
        resolvers
    }
})