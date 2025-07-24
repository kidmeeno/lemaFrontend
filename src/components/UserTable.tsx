import React from 'react';
import Loader from './Loader';
import { UserTableProps } from '../types';

const UserTable: React.FC<UserTableProps> = ({
  data,
  isFetching,
  onUserClick,
}) => {
  return (
    <div className='border border-[#E9EAEB] rounded-lg overflow-x-auto'>
      <table className='min-w-full table-fixed'>
        <thead>
          <tr>
            {['Full Name', 'Email Address', 'Address'].map((header, index) => (
              <th
                key={index}
                className='text-left text-[#535862] px-4 py-2 h-[80px] text-[14px] leading-[18px] font-medium tracking-normal mb-[12px]'
                style={{ width: index === 2 ? '392px' : '250px' }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isFetching && (
            <tr>
              <td colSpan={3} className='px-4 py-4'>
                <Loader height='200px' width='100%' />
              </td>
            </tr>
          )}

          {!isFetching &&
            data?.data
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((user) => (
                <tr
                  key={user.id}
                  className='hover:bg-gray-50 cursor-pointer border-b border-b-[#E9EAEB]'
                  onClick={() => onUserClick(user.id)}
                >
                  <td className='text-[#535862] px-4 py-2 h-[80px] w-[250px] whitespace-nowrap overflow-hidden text-ellipsis text-[16px] leading-[20px] font-medium tracking-normal'>
                    {user.name}
                  </td>
                  <td className='text-[#535862] px-4 py-2 h-[80px] w-[250px] whitespace-nowrap overflow-hidden text-ellipsis text-[16px] leading-[20px] font-normal tracking-normal'>
                    {user.email}
                  </td>
                  <td
                    className='text-[#535862] px-4 py-2 h-[80px] w-[392px] whitespace-nowrap overflow-hidden text-ellipsis text-[16px] leading-[20px] font-normal tracking-normal'
                    title={`${user.street}, ${user.state}, ${user.city}, ${user.zipcode}`}
                  >
                    {`${user.street}, ${user.state}, ${user.city}, ${user.zipcode}`}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
