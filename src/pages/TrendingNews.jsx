import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// First set of ads for the first carousel
const adsFirstCarousel = [
  { id: 1, image: 'https://tpc.googlesyndication.com/simgad/2321749211834189627', link: '#' },
  { id: 2, image: 'https://tpc.googlesyndication.com/simgad/17704820894939281964', link: '#' },
  { id: 3, image: 'https://s.adroll.com/a/WZZ/TUS/WZZTUSZR25GCJBXPA6QYPZ.png', link: '#' },
];

// Second set of ads for the second carousel
const adsSecondCarousel = [
  { id: 4, image: 'https://tpc.googlesyndication.com/simgad/1634173876944796672', link: '#' },
  { id: 5, image: 'https://tpc.googlesyndication.com/simgad/3553971382331208287', link: '#' },
  { id: 6, image: 'https://tpc.googlesyndication.com/simgad/17704820894939281964', link: '#' },
];

const staticAds = [
  { id: 7, image: 'https://tpc.googlesyndication.com/simgad/3553971382331208287', link: '#' },
  { id: 8, image: 'https://tpc.googlesyndication.com/simgad/17704820894939281964', link: '#' },
];

const photoUrls = [
  'https://dailypost.ng/wp-content/uploads/2019/07/Fuel-560x600.jpg',
  'https://dailypost.ng/wp-content/uploads/2023/06/Asiwaju-Bola-Tinubu-10-590x354.jpg',
  'https://dailypost.ng/wp-content/uploads/2022/12/naira-590x354.jpg',
  'https://dailypost.ng/wp-content/uploads/2024/01/Dangote-refinery-2.jpg',
  'https://dailypost.ng/wp-content/uploads/2022/01/Kumuyi-.jpg',
  'https://dailypost.ng/wp-content/uploads/2024/03/Shettima.jpeg'
];

const TrendingNews = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    // Fetch trending posts
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6')
      .then(response => setTrendingPosts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="trending-news container mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Main Content: Trending News */}
      <div className="col-span-3">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Trending News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trendingPosts.map((post, index) => (
            <article key={post.id} className="flex items-start p-4 bg-white shadow-md rounded-lg">
              <img src={photoUrls[index % photoUrls.length]} alt={post.title} className="w-48 h-32 rounded-lg object-cover mr-4" />
              <div className="flex flex-col w-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-2">{post.body}</p>
                <Link 
  to={`/readMore/${post.id}`} 
  state={{ sectionTitle: 'Trending News', imageUrl: photoUrls[index % photoUrls.length] }} 
  className="text-blue-500 hover:underline"
>
  Read More
</Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Sidebar: Ads */}
      <div className="sidebar col-span-1 space-y-8">
        <h2 className="text-sm font-light text-gray-500 mb-4">Advertisement</h2>

        {/* First Splide Ad Carousel */}
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
          {adsFirstCarousel.map((ad) => (
            <SplideSlide key={ad.id}>
              <Link to={ad.link}>
                <img
                  src={ad.image}
                  alt={`Ad ${ad.id}`}
                  className="w-96 h-56 object-cover rounded-lg shadow-lg"
                />
              </Link>
            </SplideSlide>
          ))}
        </Splide>

        {/* Second Splide Ad Carousel */}
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
          {adsSecondCarousel.map((ad) => (
            <SplideSlide key={ad.id}>
              <Link to={ad.link}>
                <img
                  src={ad.image}
                  alt={`Ad ${ad.id}`}
                  className="w-96 h-56 object-cover rounded-lg shadow-lg"
                />
              </Link>
            </SplideSlide>
          ))}
        </Splide>

        {/* Static Ads */}
        {staticAds.map((ad) => (
          <div key={ad.id} className="static-ad my-4">
            <Link to={ad.link}>
              <img
                src={ad.image}
                alt={`Static Ad ${ad.id}`}
                className="w-96 h-56 object-cover rounded-lg shadow-lg"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
