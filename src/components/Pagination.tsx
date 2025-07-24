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
    <div className='flex items-center gap-2 justify-end mt-6 flex-wrap'>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className='px-3 py-1 flex gap-2 items-center disabled:opacity-50 text-[14px] leading-[20px] font-semibold tracking-normal text-[#535862]'
      >
        <ArrowLeft/>
        Previous
      </button>

      {pages.map((p, index) => (
        <button
          key={index}
          disabled={p === '...'}
          onClick={() => typeof p === 'number' && onPageChange(p)}
          className={`px-3 py-1 border rounded ${
            currentPage === p ? 'bg-[#F9F5FF] text-[#7F56D9]' : 'hover:bg-gray-200 text-[#535862]'
          } ${p === '...' ? 'cursor-default' : ''}`}
        >
          {p}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className='px-3 py-1 flex gap-2 items-center  disabled:opacity-50 text-[14px] leading-[20px] font-semibold tracking-normal text-[#535862]'
      >
        Next
        <ArrowRight/>
      </button>
    </div>
  );
};

export default Pagination;
