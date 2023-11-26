import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';

const HomePage = lazy(() => import('./pages/HomePage'));
const TodoPage = lazy(() => import("./pages/TodoPage"));
const UserPage = lazy(() => import("./pages/UserPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const UserProfile = lazy(() => import("./components/UserProfile"));
// import TodoPage from './pages/TodoPage';
// import UserPage from './pages/UserPage';
// import RegistrationPage from './pages/RegistrationPage';
// import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <BrowserRouter>
      <NavMenu />
      <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:idUser" element={<UserProfile />} />
        <Route path="/sign-up" element={<RegistrationPage />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
