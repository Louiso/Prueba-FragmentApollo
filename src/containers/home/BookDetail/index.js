import React , { useState } from 'react'
import gql from 'graphql-tag';
import BookEditForm from './BookEditForm';
import { useQuery } from 'react-apollo';
import { GET_BOOK_SELECTED } from '../../../functions/graphql/local/queries';

const fragments = {
  book: gql`
    fragment BookSelectedFragment on Book {
      _id,
      author,
      title
    }
  `
}

const BookDetail = () => {
  const [ edit, setEdit ] = useState(false)
  const { data : { book } } = useQuery(GET_BOOK_SELECTED(fragments))
  const { author, title, _id } = book
  if(_id === null) return null
  return (
    <div>
      BookDetail: 
      <div>
        {edit? <BookEditForm book={book} setEdit={setEdit}/>:<div>{author} {title}</div>}
      </div>
      {!edit && (<button onClick = {() => setEdit(!edit)}>Editar</button>)}
    </div>
  )
}

BookDetail.fragments = fragments

export default BookDetail