import { useMutation } from '@tanstack/react-query';
import { ENDPOINTS, MUTATION_KEYS } from '../lib/constants';
import axios from 'axios';
import { toast } from 'react-toastify';

export function useDeleteUserPost() {
  return useMutation({
    mutationKey: [MUTATION_KEYS.POST.DELETE_POST],
    mutationFn: async (id: string) => {
      const url = ENDPOINTS.API_BASE_DEV_URL + ENDPOINTS.POSTS.DELETE_POST(id);
      try {
        const res = await axios.delete(url);
        toast.success('Post deleted successfully');
        return res?.data?.data;
      } catch (error) {
        toast.error('Failed to delete post');
      }
    },
  });
}
