import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        email,
        password
      });

      console.log(response.data); // Handle the response accordingly
      // You might want to redirect or perform other actions based on the response
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid h-100 d-flex align-items-center justify-content-center mt-5">
      <div className="card d-flex p-4 bg-dark text-white">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="mt-3 text-center">
          <a href="#forgotPassword" className="text-light">Forgot password?</a>
        </div>
        <div className="mt-3 text-center">
          <span className="text-light">Don't have an account? </span>
          <a href="#register" className="text-light font-weight-bold">Register here</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

