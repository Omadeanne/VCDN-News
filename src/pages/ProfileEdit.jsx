import { useState, useEffect } from 'react';

const ProfileEdit = ({ user }) => {
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [bio, setBio] = useState(user?.bio || '');

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
      setBio(user.bio || '');
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, bio }); 
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-red-500 mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
          <label className="block text-gray-700">Bio</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-red-500 text-white py-2 rounded">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
