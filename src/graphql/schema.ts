import { makeExecutableSchema } from '@graphql-tools/schema';
import userTypeDefs from './typeDefs/userTypeDefs';
import userResolver from './resolvers/userResolver';

export const schema = makeExecutableSchema({
    typeDefs: [userTypeDefs],
    resolvers: [userResolver]
});
