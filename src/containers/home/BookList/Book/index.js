import React from 'react'
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';
import { SELECT_BOOK } from '../../../../functions/graphql/local/mutations';

const fragments = {
  book: gql`
    fragment BookFragment on Book {
      _id,
      author,
      title
    }
  `
}

const Book = ({book : { _id, author, title} } ) => {
  const [ selectBook ] = useMutation(SELECT_BOOK(fragments)) 
  const _handleClickOnBook = () => {
    selectBook({
      variables: {
        _id
      }
    })
  }
  return (
    <div onClick = {_handleClickOnBook}>
      {title} {author}
    </div>
  )
}

Book.fragments = fragments

export default Book
