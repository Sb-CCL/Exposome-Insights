import "./App.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Navbar from "./components/marketing/navbar";
import { Footer } from "./components/marketing/footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import ScrollToTopButton from "./hooks/scroll-to-top-button";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsOfService from "./pages/terms-of-service";
import { useAuthContext } from "./hooks/useAuthContext";
import NotFoundPage from "./pages/not-found";
import Error from "./pages/error";

function App({ children }) {
  const { user } = useAuthContext();

  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem
        disableTransitionOnChange
        storageKey='main-theme'
      >
        <BrowserRouter>
          <Navbar />
          <ScrollToTopButton />
          <div className='min-h-screen flex flex-col dark:bg-[#1F1F1F]'>
            <div className='pt-28 items-center flex-col py-6 px-4 '>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route
                  path='/login'
                  element={!user ? <Login /> : <Navigate to='/dashboard' />}
                />
                <Route
                  path='/register'
                  element={!user ? <Register /> : <Navigate to='/' />}
                />
                <Route
                  path='/dashboard'
                  element={!user ? <Navigate to='/login' /> : <Dashboard />}
                />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/terms-of-service' element={<TermsOfService />} />
                <Route path='/error' element={<Error />} />{" "}
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
              {children}
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
