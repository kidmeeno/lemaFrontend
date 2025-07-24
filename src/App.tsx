import { Route, Routes } from "react-router-dom";
import UsersPage from "./pages/users/UsersPage";
import PostsPage from "./pages/posts/PostPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/:id" element={<PostsPage />} />
    </Routes>
  );
}
