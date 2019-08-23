import React from 'react'

const Book = ({book : { author, title} } ) => {
  return (
    <div>
      {title} {author}
    </div>
  )
}

export default Book
