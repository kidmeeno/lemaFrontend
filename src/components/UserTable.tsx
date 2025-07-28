import React from 'react';
import Loader from './Loader';
import { UserTableProps } from '../types';

const UserTable: React.FC<UserTableProps> = ({
  data,
  isFetching,
  onUserClick,
}) => {
  return (
    <div className='border border-gray-border rounded-lg overflow-x-auto'>
      <table className='w-full  table-fixed'>
        <thead>
          <tr>
            <th className='w-[30%] text-left overflow-hidden text-ellipsis  text-primary px-6 py-4 text-[14px] leading-[18px] font-medium tracking-normal font-inter'>
              Full Name
            </th>
            <th className='w-[30%] text-left overflow-hidden text-ellipsis  text-primary px-6 py-4 text-[14px] leading-[18px] font-medium tracking-normal font-inter'>
              Email Address
            </th>
            <th className='w-[392px] text-left text-primary px-6 py-4 text-[14px] leading-[18px] font-medium tracking-normal font-inter'>
              Address
            </th>
          </tr>
        </thead>
        <tbody>
          {isFetching && (
            <tr>
              <td colSpan={3} className='px-4 py-4 font-inter'>
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
                  className='hover:bg-gray-50 cursor-pointer border-b border-b-gray-border'
                  onClick={() => onUserClick(user.id)}
                >
                  <td className='text-primary px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis text-sm leading-5 font-medium tracking-normal'>
                    {user.name}
                  </td>
                  <td className='text-primary px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis text-sm leading-5 font-normal tracking-normal'>
                    {user.email}
                  </td>
                  <td
                    className='text-primary px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis text-sm leading-5 font-normal tracking-normal'
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
