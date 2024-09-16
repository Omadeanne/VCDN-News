import { useState } from 'react';
// import googlepng from '../assets/google.png';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rememberMe) {
      localStorage.setItem('rememberMe', JSON.stringify({ email, password }));
    }

    alert(`Signing in with Email: ${email}`);
    console.log(`Email: ${email}, Password: ${password}, Remember Me: ${rememberMe}`);
    // Handle further sign-in logic here
  };

  return (
    <div className="container flex justify-center mx-auto p-4 bg-white rounded-lg ">
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
            {/* <div className="text-sm font-normal">
              Forgot Password?
              <span className="text-blue-500 cursor-pointer ml-2 hover:text-indigo-950">
                Click here
              </span>
            </div> */}
          </div>
          <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded mx-auto">
            Sign In
          </button>
         
          {/* <button
            type="button"
            className="flex items-center justify-center w-full bg-gray-500 text-white py-2 px-4 rounded mx-auto"
          >
             <img src={googlepng} alt="Google Icon" className="w-5 h-5 mr-2" />
            Sign In with Google
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
