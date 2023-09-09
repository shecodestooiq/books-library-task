import { Prev } from 'react-bootstrap/esm/PageItem'

export default function Text({title, subtitle, author, description, language, pdf, previewLink, publisher, publishDate, pageCount, categories}) {

  return (
    <div className='display-text'>
        <h2>{title}</h2>
        <span>{subtitle}</span>
        <pre>{description}</pre>
        <p>Publisher: {publisher}</p>
        <p>Publish Date: {publishDate}</p>
        <p>Page Counts: {pageCount} pages</p>
        <p>Categories: {categories}</p>
        <p>Language: {language}</p>
        <p>{pdf}</p>
        <a href={previewLink}>{author}</a><br/>
        <a href={previewLink}>prevLink</a>
    </div>
  )
}
