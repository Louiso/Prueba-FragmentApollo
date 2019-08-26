import gql from "graphql-tag";

export default gql`
query {
  books @client {
    author,
    title,
    _id
  }
}
`