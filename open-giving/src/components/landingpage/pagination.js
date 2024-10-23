import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
const Pagination = ({ totalPages, currentPage, handleChangePage }) => {
  const handlePrevious = (event) => {
    if (currentPage > 1) {
      handleChangePage(event, currentPage - 1);
    }
  };

  const handleNext = (event) => {
    if (currentPage < totalPages) {
      handleChangePage(event, currentPage + 1);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center w-full my-6 font-sans">
      <div className="flex items-center space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`p-2 ${
            currentPage === 1 ? 'text-primary opacity-50' : 'text-primary'
          }`}
        >
          <FaAngleLeft />
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1).map(
            (page) => (
              <button
                key={page}
                onClick={(event) => handleChangePage(event, page)}
                className={`w-[35px] h-[37px] flex flex-col items-center justify-center rounded-lg ${
                  page === currentPage
                    ? 'bg-primary text-white'
                    : 'bg-transparent text-primary'
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`p-2 ${
            currentPage === totalPages
              ? 'text-primary opacity-50'
              : 'text-primary'
          }`}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
