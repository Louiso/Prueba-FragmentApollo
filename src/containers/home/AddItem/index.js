import React from 'react'
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_BOOK = gql`
  mutation addBook($id: Int!) {
    addBook(
      id: $id
    ) @client{
      author,
      title
    }
  }
`

const AddItem = () => {
  const [ addBook ] = useMutation(ADD_BOOK)

  return (
    <div>
      <button onClick={() => addBook({
        variables: {
          id: 0
        }
      })}>agregar</button>
    </div>
  )
}


export default AddItem