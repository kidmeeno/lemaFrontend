export const ENDPOINTS = {
  API_BASE_DEV_URL: 'https://lemaassesmentbackend.onrender.com/api',
  USER: {
    USERS: "/users",
  },
  POSTS: {
    USERS: "/users",
    GET_USER_POSTS: (id: string) => `/users/${id}/posts`,
    DELETE_POST: (id: string) => `/posts/${id}`,
  },
};

export const APP_KEYS = {};

export const MUTATION_KEYS = {
  POST: {
    DELETE_POST: "DELETE_POST",
  },
};

export const QUERY_KEYS = {
  USER: {
    GET_ALL_USERS: "GET_ALL_USERS",
  },
  POSTS: {
    GET_ALL_USER_POSTS: "GET_ALL_USER_POSTS",
  },
};
