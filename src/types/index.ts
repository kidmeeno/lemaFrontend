export interface User {
  id: number;
  name: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface UsersResponse {
  data: User[];
  total: number;
}

export interface Post {
  id: string;
  title: string;
  body: string;
}

export interface PostsResponse {
  user: { id: string; name: string; email: string };
  posts: Post[];
}

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};


export interface UserTableProps {
  data: { data: User[]; total: number } | undefined;
  isFetching: boolean;
  onUserClick: (userId: number) => void;
}

export interface UserPostsGridProps {
  posts: Post[];
  onDelete: (postId: string) => void;
  onOpenNewPostModal: () => void;
}

export interface NewPostModalProps {
  isOpen: boolean;
  closeModal: () => void;
  userId: string;
}