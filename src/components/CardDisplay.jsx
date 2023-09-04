import React from 'react'
import BookCard from './BookCard'

const CardDisplay=({data})=> {
  return (
    <div className="row">
        {
          Array.isArray(data) &&
          data.map(book => (
            <BookCard
              key={book.id}
              img={book.volumeInfo.imageLinks?.smallThumbnail}
              title={book.volumeInfo.title}
              subtitle={book.volumeInfo.subtitle}
              author={book.volumeInfo.authors}
              publisher={book.volumeInfo.publisher}
              publishedDate={book.volumeInfo.publishedDate}
              discription={book.volumeInfo.discription}
              pageCount={book.volumeInfo.pageCount}
              categories={book.volumeInfo.categories}
              language={book.volumeInfo.language}
              previewLink={book.volumeInfo.previewLink}
              pdf={book.volumeInfo.pdf}
            />
          ))
        }
      </div>
  )
}

export default CardDisplay
