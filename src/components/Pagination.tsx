import React from 'react';
import { generatePageNumbers } from '../lib/utils';
import { PaginationProps } from '../types';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = generatePageNumbers(currentPage, totalPages);

  return (
    <div className='flex items-center justify-end mt-6 flex-wrap font-inter'>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className='px-3 py-1 flex gap-2 items-center disabled:opacity-50 text-sm leading-[20px] font-semibold tracking-normal text-primary'
      >
        <ArrowLeft height={20} width={20} />
        Previous
      </button>

      {pages.map((p, index) => (
        <button
          key={index}
          disabled={p === '...'}
          onClick={() => typeof p === 'number' && onPageChange(p)}
          className={`px-3 py-1 h-10 w-10 rounded ${
            currentPage === p
              ? 'bg-secondary-bg text-secondary'
              : 'hover:bg-gray-200 text-primary'
          } ${p === '...' ? 'cursor-default' : ''}`}
        >
          {p}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className='px-3 py-1 flex gap-2 items-center  disabled:opacity-50 text-sm leading-[20px] font-semibold tracking-normal text-primary'
      >
        Next
        <ArrowRight height={20} width={20} />
      </button>
    </div>
  );
};

export default Pagination;
