import React from 'react'
import { useLocation } from 'react-router-dom'

import Back from '../components/Back';
import DetailsDisplay from '../components/DetailsDisplay';

export default function Display() {
  const location = useLocation();
  const encodedUrl = location.search.slice(5);
  const imageUrl = decodeURIComponent(encodedUrl);
  const searchParams = new URLSearchParams(location.search);
  // const imageUrl = searchParams.get('id');
  // const bookId = searchParams.get('id');
  // console.log(`book id: ${bookId}`)
  // const imageUrl = `http://books.google.com/books/content?id=${bookId}=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`;
  const title = searchParams.get('title');
  const subtitle = searchParams.get('subtitle');
  const author = searchParams.get('author');
  const publisher = searchParams.get('publisher');
  const publishedDate = searchParams.get('publishedDate');
  const description = searchParams.get('description');
  const pageCount = searchParams.get('pageCount');
  const categories = searchParams.get('categories');
  const language = searchParams.get('language');
  const previewLink = searchParams.get('previewLink');
  const pdf = searchParams.get('pdf');

  return (
    <>
    <Back />
    <DetailsDisplay
      imageUrl={imageUrl}
      title={title}
      subtitle={subtitle}
      author={author}
      publisher={publisher}
      publishedDate={publishedDate}
      description={description}
      pageCount={pageCount}
      categories={categories}
      language={language}
      pdf={pdf}
      previewLink={previewLink}
    />
    </>
    
  )
}
