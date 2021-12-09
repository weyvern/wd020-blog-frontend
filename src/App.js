import { Routes, Route } from 'react-router-dom';
import AuthState from './context/AuthContext';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './components/UserProfile';
import CreatePost from './components/CreatePost';

const App = () => {
  return (
    <AuthState>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='protected' element={<ProtectedRoute />}>
            <Route index element={<UserProfile />} />
            <Route path='create-post' element={<CreatePost />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AuthState>
  );
};

export default App;
