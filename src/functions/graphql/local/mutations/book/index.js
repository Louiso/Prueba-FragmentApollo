import gql from "graphql-tag";

const SELECT_BOOK = ({book: BookFragment}) => gql`
  mutation selectBook(
    $_id: ID
  ){
    selectBook(
      _id: $_id
    ) @client {
      ...BookFragment
    }
  }
  ${BookFragment}
`

const UPDATE_BOOK_SELECTED = ({book: BookFragment}) => gql`
  mutation updateBookSelected(
    $book: JSON
  ){
    book: updateBookSelected(
      book: $book
    ) @client{
      ...BookFragment
    }
  }
  ${BookFragment}
`

const ADD_BOOK = ({ book: BookFragment}) => gql`
  mutation addBook(
    $book: JSON
  ){
    addBook (
      book: $book
    ) @client{
      ...BookFragment
    }
  }
  ${BookFragment}
`

export {
  SELECT_BOOK,
  UPDATE_BOOK_SELECTED,
  ADD_BOOK
}