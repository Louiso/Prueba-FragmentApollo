import gql from "graphql-tag";

export default gql`
fragment BookFragment on Book {
  author,
  title
}
`