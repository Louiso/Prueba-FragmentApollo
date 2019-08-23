import React from 'react'
import Book from './Book';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
const GET_BOOKS = gql`{
  books @client {
    author,
    title
  }
}
`
const BookList = () => {
  const { data: { books } } = useQuery(GET_BOOKS)
  return (
    <div>
      {
        books.map((book, index) => (
          <Book book = { book } key={index}/>
        ))
      }
    </div>
  )
}

export default BookList
