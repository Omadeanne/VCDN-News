import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateUsername = (value) => {
    const regex = /^[A-Za-z]+$/;
    if (!regex.test(value)) {
      setUsernameError('Username can only contain letters.');
    } else {
      setUsernameError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernameError) {
      return;
    }
    toast.success('User account is registered successfully!');
    // Registration logic here
  };

  return (
    <>
      <ToastContainer />
      <div className="container flex justify-center mx-auto p-4 bg-white rounded-lg">
        <div className="w-full max-w-md">
          <h2 className="text-2xl text-center font-bold text-red-500 mb-4">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={username}
                onChange={(e) => {
                  const value = e.target.value;
                  setUsername(value);
                  validateUsername(value);
                }}
                required
                maxLength="20" 
              />
              {usernameError && <p className="text-red-500 text-sm">{usernameError}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full p-2 border border-gray-300 rounded pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="text-sm font-normal">
              Already have an account?
              <Link to="/sign-in" className="text-blue-500 cursor-pointer ml-2 hover:text-indigo-950">
                Sign In
              </Link>
            </div>
            <button type="submit" className="w-full bg-red-500 text-white py-2 rounded">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
