// src/App.js
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/Authentication/SignIn';
import SignUp from './Pages/Authentication/SignUp';
import About from './Pages/About/About';
import Navbar from './Component/Navebar/Navbar';
import Footer from './Component/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Pages/Menu/Menu';
import Service from './Pages/Service/Service';
import Cart from './Component/Cart/Cart';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import Contact from './Pages/Contect/Contact';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Router>
        {/* Only show Navbar and Footer on the Home and other protected routes */}
        <Routes>
          {/* Public Routes */}
          <Route 
            path='/SignIn' 
            element={<SignIn />} 
          />
          <Route 
            path='/SignUp' 
            element={<SignUp />} 
          />

          {/* Protected Routes */}
          <Route 
            path='/' 
            element={
              <>
                <Navbar />
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
                <Footer />
              </>
            } 
          />  <Route 
          path='/home' 
          element={
            <>
              <Navbar />
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
              <Footer />
            </>
          } 
        />
          <Route 
            path='/About' 
            element={
              <>
                <Navbar />
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
                <Footer />
              </>
            } 
          />
          <Route 
            path='/Menu' 
            element={
              <>
                <Navbar />
                <ProtectedRoute>
                  <Menu />
                </ProtectedRoute>
                <Footer />
              </>
            } 
          />
          <Route 
            path='/Service' 
            element={
              <>
                <Navbar />
                <ProtectedRoute>
                  <Service />
                </ProtectedRoute>
                <Footer />
              </>
            } 
          />
          <Route 
            path='/Contact' 
            element={
              <>
                <Navbar />
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
                <Footer />
              </>
            } 
          />
          <Route 
            path='/Order' 
            element={
              <>
                <Navbar />
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
                <Footer />
              </>
            } 
          />

          {/* Optionally, add a catch-all route for 404 */}
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
