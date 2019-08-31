import gql from "graphql-tag";

const GET_BOOKS = ({book: BookFragment}) => gql`
  query books{
    books {
      ...BookFragment
    }
  }
  ${BookFragment}
`

const GET_BOOK_SELECTED = ({book: BookFragment}) => gql`
  query book{
    book: bookSelected {
      ...BookSelectedFragment
    }
  }
  ${BookFragment}
`

export {
  GET_BOOKS,
  GET_BOOK_SELECTED
}