import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function BookCard(props) {
    const navigate = useNavigate();

    const handleCardClick = () => {
      navigate(`/display?url=${props.img}
      &title=${props.title}
      &subtitle=${props.subtitle}
      &author=${props.author}
      &description=${props.description}
      &publisher=${props.publisher}
      &publishedDate=${props.publishedDate}
      &pageCount=${props.pageCount}
      &categories=${props.categories}
      &language=${props.language}
      &previewLink=${props.previewLink}
      &pdf=${props.pdf}`);
    }
 
  return (
    <Card className='card' onClick={handleCardClick}>
      <Card.Img variant="top" height='300px' src={props.img} />
      <Card.Body>
        <Card.Title className='h3'>{props.title}</Card.Title>
        <Card.Text className='card-text'>{props.author}</Card.Text>
        <Card.Text className='card-text'>{props.categories}</Card.Text>
      </Card.Body>
    </Card>
  );
}
              // key={book.id}
              // img={book.volumeInfo.imageLinks?.smallThumbnail}
              // title={book.volumeInfo.title}
              // subtitle={book.volumeInfo.subtitle}
              // author={book.volumeInfo.authors}
              // publisher={book.volumeInfo.publisher}
              // publishedDate={book.volumeInfo.publishedDate}
              // discription={book.volumeInfo.discription}
              // pageCount={book.volumeInfo.pageCount}
              // categories={book.volumeInfo.categories}
              // language={book.volumeInfo.language}
              // previewLink={book.volumeInfo.previewLink}
              // pdf={book.volumeInfo.pdf}

