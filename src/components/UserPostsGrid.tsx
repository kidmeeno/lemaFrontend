import React from 'react';
import { Trash2, PlusCircle } from 'lucide-react';
import { UserPostsGridProps } from '../types';

const UserPostsGrid: React.FC<UserPostsGridProps> = ({
  posts,
  onDelete,
  onOpenNewPostModal,
}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
      {/* New Post Card */}
      <div
        onClick={onOpenNewPostModal}
        className='border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center min-h-[293px] max-w-[270px] cursor-pointer hover:bg-gray-50'
      >
        <div className='text-center text-gray-500'>
          <PlusCircle className='mx-auto mb-1' />
          <p className='text-sm'>New Post</p>
        </div>
      </div>

      {/* Existing Posts */}
      {posts.map((post) => (
        <div
          key={post.id}
          className='relative bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200 min-h-[293px] max-w-[270px]'
        >
          <button
            className='absolute top-2 right-2 text-[#F9566A] hover:text-red-500'
            onClick={() => onDelete(post.id)}
          >
            <Trash2 size={16} />
          </button>
          <h2 className='text-[#535862] mb-4 text-[18px] leading-[20px] font-medium tracking-normal w-[95%]'>
            {post.title}
          </h2>
          <p className='text-[#535862] font-inter text-[14px] leading-[20px] font-normal tracking-normal'>
            {post.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserPostsGrid;
