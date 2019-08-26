import React from 'react'
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik'
import { ADD_BOOK } from '../../../functions/graphql/local';

const useAddBook = () => {
  const [ mutation ] = useMutation(ADD_BOOK,{
    update: (cache, resp ) => {
      console.log(cache.optimisticData.data)
      console.log(resp)
    }
  })
  return mutation 
}

const AddItem = () => {
  const addBook = useAddBook()
  const book = {
    _id: Math.random(),
    author: 'Sera',
    title: ':v',
    __typename: 'Book'
  }
  return (
    <div>
      <Formik
        initialValues = { book /** {author, title}*/}
        onSubmit={(book, actions) => {
          addBook({
            variables: {
              book
            }
          })
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
            {/* {dates.map(({value}, index) => (
              <input 
                key={index} 
                name={`dates[${index}].value`} 
                value={value} 
                onChange={handleChange}/>
            ))} */}
            <input type="submit" value="agregar"/>
          </form>
        )}
      />
    </div>
  )
}


export default AddItem