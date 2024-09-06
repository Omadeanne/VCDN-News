import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const photoUrls = [
    'https://dailypost.ng/wp-content/uploads/2019/07/Fuel-560x600.jpg',
    'https://dailypost.ng/wp-content/uploads/2023/06/Asiwaju-Bola-Tinubu-10-590x354.jpg',
    'https://dailypost.ng/wp-content/uploads/2022/12/naira-590x354.jpg',
    'https://dailypost.ng/wp-content/uploads/2024/01/Dangote-refinery-2.jpg',
    'https://dailypost.ng/wp-content/uploads/2022/01/Kumuyi-.jpg',
    'https://dailypost.ng/wp-content/uploads/2024/03/Shettima.jpeg'
  ];
  
  const LocalNews = () => {
    const [localPosts, setLocalPosts] = useState([]);
  
    useEffect(() => {
      // Fetch local posts (you can replace this with a different API if needed)
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6')
        .then(response => setLocalPosts(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div className="local-news container mx-auto p-4">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Local News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {localPosts.map((post, index) => (
            <article key={post.id} className="flex items-start p-4 bg-white shadow-md rounded-lg">
              <img src={photoUrls[index % photoUrls.length]} alt={post.title} className="w-48 h-32 rounded-lg object-cover mr-4" />
              <div className="flex flex-col w-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-2">{post.body}</p>
                <Link to={`/article/${post.id}`} className="text-blue-500 hover:underline">Read More</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  };
  
  export default LocalNews;