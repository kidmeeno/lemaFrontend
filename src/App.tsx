import { Route, Routes } from 'react-router-dom';
import UsersPage from './pages/users/UsersPage';
import PostsPage from './pages/posts/PostPage';
import { Bounce, ToastContainer } from 'react-toastify';
import useNetworkStatus from './hooks/useNetworkStatus';

export default function App() {
  const isOnline = useNetworkStatus();

  return (
    <>
      {!isOnline && (
        <div className='bg-red-100 text-red-800 text-center p-3'>
          🚫 You're offline. Please check your internet connection.
        </div>
      )}
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
