import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import CardDisplay from './CardDisplay';

export default function Search({ data }) {
  
  const [filterdData, setFilterdData] = useState([]);
  const [showAllCards, setShowAllCards] = useState(true)
  const inputRef = useRef();

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setShowAllCards(false);

    const newFilter = data.filter((value) => {
      return value.volumeInfo.title
      .toLowerCase()
      .includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilterdData([]);
      setShowAllCards(true);
    }
    else
    {
      setFilterdData(newFilter);
    }
  }
  const handleClearInput = () => {
    setFilterdData([]);
    setShowAllCards(true);
    inputRef.current.value = "";
  }
  return (
    <div className="search">
      <div className='container search-area'>
      <input
        type="text"
        ref={inputRef}
        onChange={handleFilter}
        placeholder='Search ...'
        />
        <div className="search-icon">
          {
            inputRef.value == 0 ?
            <FontAwesomeIcon className='fa' icon={faMagnifyingGlass} /> :
            <FontAwesomeIcon className='fa' id='clear-btn' icon={faXmark} onClick={handleClearInput}/>
          }
        </div>
    </div>
    {
      filterdData.length > 0 && (
        <div className="data-results">
        {
          filterdData.slice(0,15).map((value,key) => (
          <p className='data-item' key={key}>{value.volumeInfo.title}</p>
          ))
        }
        </div>
    )
    }
    {
      showAllCards ? <CardDisplay data={data} /> : <CardDisplay data={filterdData} />
    }
    </div>
  )
}
