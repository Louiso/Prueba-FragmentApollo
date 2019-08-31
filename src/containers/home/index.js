import React from 'react'
import BookList from './BookList';
import AddItem from './AddItem';
import BookDetail from './BookDetail';

const Home = () => {
  return (
    <div>
      <AddItem/>
      <BookList/>
      <BookDetail/>
    </div>
  )
}

export default Home
