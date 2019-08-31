import React from 'react'
import { Formik } from 'formik'
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ADD_BOOK } from '../../../functions/graphql/local/mutations';

const fragments = {
  book: gql`
    fragment BookFragment on Book {
      _id,
      author,
      title
    }
  `
}

const AddItem = () => {

  const [ addBook ] = useMutation(ADD_BOOK(fragments))
  const book = {
    author: '',
    title: '',
    __typename: 'Book'
  }
  return (
    <div>
      <Formik
        initialValues = { book }
        onSubmit={(book, actions) => {
          book._id = Math.random()
          addBook({
            variables: {
              book
            }
          })
          actions.resetForm()
        }}
        render= {({handleSubmit, values: {title, author, dates}, handleChange}) => (
          <form onSubmit={handleSubmit}>
            <input 
              name="title" 
              value = {title} 
              onChange={handleChange}/>
            <input 
              name="author" 
              value ={author} 
              onChange={handleChange}/>
            <input type="submit" value="agregar"/>
          </form>
        )}
      />
    </div>
  )
}

AddItem.fragments = fragments

export default AddItem