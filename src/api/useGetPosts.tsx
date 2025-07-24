import { useQuery } from '@tanstack/react-query';
import { ENDPOINTS, QUERY_KEYS } from '../lib/constants';
import axios from 'axios';
import { PostsResponse, UsersResponse } from '../types';

export function useGetPosts(id: string, page?: number, limit?: number) {
  return useQuery<PostsResponse>({
    queryKey: [QUERY_KEYS.POSTS.GET_ALL_USER_POSTS],
    queryFn: async () => {
      if (!id) return;
      const url = `${
        ENDPOINTS.API_BASE_DEV_URL
      }${ENDPOINTS.POSTS.GET_USER_POSTS(id)}?page=${page || 1}&limit=${
        limit || 5
      }`;
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
