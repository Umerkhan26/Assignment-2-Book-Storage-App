// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Home = () => {
//   return (
//     <div className="container-fluid">
//       <div className="container py-5 text-white">
//         <div className="row align-items-center justify-content-center">
//           <div className="col-md-6 text-center">
//             <h1 className="display-4 fw-bold text-uppercase">Book Storage App</h1>
//             <p className="lead mb-4 fw-bolder">Manage your book collection effortlessly.</p>
//             <div className="d-grid gap-3">
//               <Link to="/login" className="btn btn-primary btn-lg">Login</Link>
//               <span className="text-light fs-3">or</span>
//               <Link to="/register" className="btn btn-secondary btn-lg">Register</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");

  const onLoginClick = () => {
    if (storedToken) {
      console.log("Token from localStorage:", storedToken);
      navigate("/dashboard");
    } else {
      console.log("Token not found in localStorage");
      navigate("/login");
    }
  };

  const onSignupClick = () => {
    navigate("/register");
  };

  const onLogoutClick = () => {
    localStorage.removeItem("token");
    console.log("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <header className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">My Unique Bookstore</h1>
          <p className="lead">Discover, Read, Enjoy!</p>
        </div>
      </header>

      <main className="container my-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Explore Books</h2>
                <p className="card-text">
                  Dive into our vast collection of books covering various genres.
                </p>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={onLoginClick}
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Join Us</h2>
                <p className="card-text">
                  Sign up for free and unlock exclusive features.
                </p>
                <button
                  className="btn btn-secondary btn-lg"
                  onClick={onSignupClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {storedToken && (
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Logout</h2>
                  <p className="card-text">
                    Ready to leave? Logout now.
                  </p>
                  <button
                    className="btn btn-danger btn-lg"
                    onClick={onLogoutClick}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
