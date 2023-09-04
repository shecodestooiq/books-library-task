import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Back=()=> {
  return (
    <>
        <Link to=".." relative="path" className='back'><FontAwesomeIcon className='fa' icon={faChevronLeft} />
            Back</Link>
    </>
  )
}

export default Back
