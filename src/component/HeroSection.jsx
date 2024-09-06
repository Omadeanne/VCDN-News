import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';

const HeroSection = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Use specific URLs for images
  const photoUrls = [
    'https://dailypost.ng/wp-content/uploads/2019/07/Fuel-560x600.jpg',
    'https://dailypost.ng/wp-content/uploads/2023/06/Asiwaju-Bola-Tinubu-10-590x354.jpg',
    'https://dailypost.ng/wp-content/uploads/2022/12/naira-590x354.jpg',
    'https://dailypost.ng/wp-content/uploads/2024/01/Dangote-refinery-2.jpg',
    'https://dailypost.ng/wp-content/uploads/2022/01/Kumuyi-.jpg',
    'https://dailypost.ng/wp-content/uploads/2024/03/Shettima.jpeg'
  ];

  // Fetching posts from JSONPlaceholder API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');

        setPosts(postsResponse.data.slice(0, 6));
        setFilteredPosts(postsResponse.data.slice(0, 6));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);

  // Handle search input and filter posts
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);

    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
      post.body.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const ads = [
    { id: 1, image: 'https://tpc.googlesyndication.com/simgad/2321749211834189627', link: '#' },
    { id: 2, image: 'https://tpc.googlesyndication.com/simgad/17704820894939281964', link: '#' },
    { id: 3, image: 'https://s.adroll.com/a/WZZ/TUS/WZZTUSZR25GCJBXPA6QYPZ.png', link: '#' },
  ];

  return (
    <section className="hero-section container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Hot Topics</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search News"
          className="w-full md:w-1/2 lg:w-1/3 p-2 border border-gray-300 rounded mb-4"
        />
        <hr className="border-gray-400 w-full mb-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          {filteredPosts.slice(0, 2).map((post, index) => (
            <article key={post.id} className="flex items-start p-4 bg-white shadow-md rounded-lg">
              <img src={photoUrls[index]} alt={post.title} className="w-96 h-56 object-cover rounded-lg mr-4" />
              <div className="flex flex-col w-full">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.body}</p>
                <Link to={`/readMore/${post.id}`} className="text-blue-500 hover:underline mt-4">Read More</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredPosts.slice(2).map((post, index) => (
            <article key={post.id} className="flex items-start p-4 bg-white shadow-md rounded-lg">
              <img src={photoUrls[index + 2]} alt={post.title} className="w-48 h-32 rounded-lg object-cover mr-4" />
              <div className="flex flex-col w-full">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.body}</p>
                <Link to={`/readMore/${post.id}`} className="text-blue-500 hover:underline mt-4">Read More</Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-bold text-gray-500 mb-4">Sponsored Ads</h2>
        <Splide
          options={{
            type: 'loop',
            perPage: 1,
            autoplay: true,
            pauseOnHover: false,
            gap: '1rem',
            arrows: false,
            pagination: true,
          }}
        >
          {ads.map((ad) => (
            <SplideSlide key={ad.id}>
              <Link to={ad.link}>
                <img src={ad.image} alt={`Ad ${ad.id}`} className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default HeroSection;
