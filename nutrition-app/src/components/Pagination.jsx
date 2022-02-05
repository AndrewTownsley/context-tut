import React from 'react';

const Pagination = ({ pageNumber, totalPages, handlePageClick}) => {
    const pages = [...Array(totalPages).keys()].map(number => number + 1); 


  return (
      <>
        <div className='page-numbers' >
            {
                pages.map((number) => (
                    <a 
                        href="/#"
                        key={number}
                        onClick={() => handlePageClick(number)}
                        className={`${pageNumber === number  && 'active-link'}`}
                    >
                        {number}
                    </a>
                ))
            }
        </div>
      </>
  );
};

export default Pagination;
