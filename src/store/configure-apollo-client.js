import ApolloClient from "apollo-boost"

// schemas, typedefs, links and cache configurations will be here

const client = new ApolloClient({
  uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
})

export default client
