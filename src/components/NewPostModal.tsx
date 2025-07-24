import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { NewPostModalProps } from '../types';

export default function NewPostModal({
  isOpen,
  closeModal,
  userId,
}: NewPostModalProps) {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      await axios.post(`/api/users/${userId}/posts`, {
        title,
        body: content,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['user-posts', userId]);
      setTitle('');
      setContent('');
      closeModal();
    },
  });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-200'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-200'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-150'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title className='text-[#181D27] text-[36px] leading-[72px] font-medium tracking-normal'>
                  New Post
                </Dialog.Title>

                <div className='mt-4'>
                  <label className='block mb-2 text-sm text-gray-700 text-[18px] leading-[20px] font-medium tracking-normal'>
                    Post title
                  </label>
                  <input
                    type='text'
                    placeholder='Give your post a title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  />
                </div>

                <div className='mt-4'>
                  <label className='block mb-2 text-sm text-gray-700 text-[18px] leading-[20px] font-medium tracking-normal'>
                    Post content
                  </label>
                  <textarea
                    placeholder='Write something mind-blowing'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={5}
                    className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  />
                </div>

                <div className='mt-6 flex justify-end space-x-2'>
                  <button
                    type='button'
                    onClick={closeModal}
                    className='px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200'
                  >
                    Cancel
                  </button>
                  <button
                    type='button'
                    onClick={() => mutate()}
                    disabled={!title || !content || isLoading}
                    className='px-4 py-2 rounded-md bg-[#334155] text-white hover:bg-indigo-700 disabled:opacity-50'
                  >
                    {isLoading ? 'Publishing...' : 'Publish'}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
