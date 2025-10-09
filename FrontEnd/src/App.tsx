import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { ThemeProvider } from './hooks/theme-provider';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignupPage';
import MainLayout from './layouts/Main-Layout';
import HomePage from './Pages/HomePage';
import VideoPage from './Pages/VideoPlayPage';





function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route           path="/sign-up"            element={<SignUpPage />}
         />
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={<HomePage />}

            />
            <Route
              path="/X"
              element={<VideoPage />}

            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
