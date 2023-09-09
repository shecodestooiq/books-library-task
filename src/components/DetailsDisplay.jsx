import React from 'react'
import Text from '../components/Text';

const DetailsDisplay = ({imageUrl, title, subtitle, author, description, language, pdf, previewLink, publisher, publishDate, pageCount, categories}) => {
  return (
      <div className='card-details'>
        <div className='card-img mt-5 mb-5'>
            <img src={imageUrl} width="400px"/>
        </div>
        <div className="card-texts">
            <Text
            title={title}
            subtitle={subtitle}
            author={author}
            description={description}
            language={language}
            pdf={pdf}
            previewLink={previewLink}
            publisher={publisher}
            publishDate={publishDate}
            pageCount={pageCount}
            categorie={categories}
            />
        </div>
    </div>
  )
}

export default DetailsDisplay
