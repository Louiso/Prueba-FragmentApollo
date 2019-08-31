import React  from 'react'
import { Formik } from 'formik';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo';
import { UPDATE_BOOK_SELECTED } from '../../../../functions/graphql/local/mutations';

const fragments = {
  book: gql`
    fragment BookFragment on Book {
      _id,
      author,
      title
    }
  `
}

const BookEditForm = ({book , setEdit }) => {
  const [ updateBookSelected ] = useMutation(UPDATE_BOOK_SELECTED(fragments))

  return (
    <Formik
      initialValues = { book }
      onSubmit={(book, actions) => {
        updateBookSelected({
          variables: {
            book
          }
        })
        setEdit(false)
      }}
      render= {({handleSubmit, values: {title, author, dates}, handleChange}) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">
            Titulo: 
          </label>
          <input
            id="title"
            name="title" 
            value = {title} 
            onChange={handleChange}/>
          <input type="submit" value="Guardar"/>
        </form>
      )}
    />
  )
}

BookEditForm.fragments = fragments

export default BookEditForm