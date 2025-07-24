import { Route, Routes } from 'react-router-dom';
import UsersPage from './pages/users/UsersPage';
import PostsPage from './pages/posts/PostPage';
import { Bounce, ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UsersPage />} />
        <Route path='/:id' element={<PostsPage />} />
      </Routes>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </>
  );
}
