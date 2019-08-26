import gql from "graphql-tag";

export default gql`
mutation addBook($book: Book!) {
  addBook(
    book: $book
  ) @client{
    author,
    title
  }
}
`