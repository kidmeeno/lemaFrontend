import { useMutation } from '@tanstack/react-query';
import { ENDPOINTS, MUTATION_KEYS } from '../lib/constants';
import axios from 'axios';

export function useDeleteUserPost() {
  return useMutation({
    mutationKey: [MUTATION_KEYS.POST.DELETE_POST],
    mutationFn: async (id: string) => {
      const url = ENDPOINTS.API_BASE_DEV_URL + ENDPOINTS.POSTS.DELETE_POST(id);
      try {
        const res = await axios.delete(url);
        return res?.data?.data;
      } catch (error) {
        throw error;
      }
    },
  });
}
