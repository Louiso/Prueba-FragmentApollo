import React from 'react'
import { useQuery } from 'react-apollo';
import Book from './Book';
import { GET_BOOKS } from '../../../functions/graphql/local/queries';

const fragments = {
  book: Book.fragments.book
}

const BookList = () => {
  const { data: { books } } = useQuery(GET_BOOKS(fragments), {
    displayName: 'Sera'
  })
  return (
    <div>
        {books.map((book, index) => (
          <Book book = { book } key={index}/>
        ))
      }
    </div>
  )
}

BookList.fragments = fragments

export default BookList
