import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assets/images/logo.png";
import Swal from 'sweetalert2'; // Import SweetAlert2

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.password) newErrors.password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate authentication process
      const token = localStorage.getItem('authToken'); // Retrieve the token

      if (token) {
        // Token exists, indicating the user is authenticated
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You are now logged in.',
        }).then(() => {
          navigate('/dashboard'); // Redirect to dashboard after successful login
        });
      } else {
        // Invalid credentials or no token found
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid credentials or you need to register first.',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Please check your credentials.',
      });
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center">
          <img src={logo} className="h-10" alt="Lylia Beauty Logo" />
          <a href="#" className="text-4xl font-semibold text-gray-900 dark:text-white">
            Lylia Beauty
          </a>
        </div>
        <div className="w-full bg-white shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="font-semibold leading-tight tracking-tight text-gray-900 text-xl dark:text-white">
              Sign In for a scented journey!
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
              <button
                type="submit"
                className="w-full text-white hover:text-black bg-black hover:bg-white border border-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?{' '}
                <a
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
