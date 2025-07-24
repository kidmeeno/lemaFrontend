import { useQuery } from '@tanstack/react-query';
import { ENDPOINTS, QUERY_KEYS } from '../lib/constants';
import axios from 'axios';
import { UsersResponse } from '../types';


export function useGetUsers(page: number, limit: number) {
  return useQuery<UsersResponse>({
    queryKey: [QUERY_KEYS.USER.GET_ALL_USERS],
    queryFn: async () => {
      const url = `${ENDPOINTS.API_BASE_DEV_URL}${ENDPOINTS.USER.USERS}?page=${page}&limit=${limit}`;
      try {
        const res = await axios.get(url);
        return res?.data;
      } catch (error) {
        // const message = returnError(error);
        throw error;
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
}
