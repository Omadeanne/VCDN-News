import { useState, useContext } from 'react';
import  AuthContext  from '../component/AuthContext';


const SignIn = () => {
  const { login } = useContext(AuthContext); // Use the login function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rememberMe) {
      localStorage.setItem('rememberMe', JSON.stringify({ email, password }));
    }

    // Trigger the login function from context
    login();

    alert(`Signing in with Email: ${email}`);
  };

  return (
    <div className="container flex justify-center mx-auto p-4 bg-white rounded-lg">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-red-500 mb-4 text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="ml-2 text-sm font-normal">Remember me</span>
            </label>
          </div>
          <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
