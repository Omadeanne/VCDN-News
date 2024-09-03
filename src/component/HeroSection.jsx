import { Link } from 'react-router-dom';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const newsItems = [
  {
    id: 1,
    title: 'Exclusive: Harris widens lead over Trump, Reuters/Ipsos poll finds',
    description: 'A major event has occurred, impacting the world significantly. Click to read more about the developments.',
    image: 'https://www.reuters.com/resizer/v2/IBJ2H7ZC45KZVONOFM56D5JGI4.jpg?auth=bc97526e10131e6a6adabc64fda830d8a67b5ffea1955ad6eadd0ed6d52fa54c&width=960&quality=80',
    link: '/news/1',
  },
  {
    id: 2,
    title: 'Technology Advances: What You Need to Know',
    description: 'New technological advances are transforming industries. Stay informed about the latest trends.',
    image: 'https://dailypost.ng/wp-content/uploads/2024/08/How-Africonomy-Is-Transforming-Public-Relations-Culture-In-Nigeria.jpg',
    link: '/news/2',
  },
  {
    id: 3,
    title: 'Economy Update: Market Fluctuations Explained',
    description: 'The market has seen significant fluctuations this week. Read more to understand the factors involved.',
    image: 'https://dailypost.ng/wp-content/uploads/2024/08/front-view-woman-working-as-travel-agent_23-2150455566.jpg',
    link: '/news/3',
  },
  {
    id: 4,
    title: 'Sports: Highlights from the Biggest Games',
    description: 'Catch up on the highlights from the most exciting games in sports this week.',
    image: 'https://dailypost.ng/wp-content/uploads/2024/08/The-Buzz-with-Toke-Makinwa-on-Showmax.jpg',
    link: '/news/4',
  },
  {
    id: 5,
    title: 'Economy Update: Market Fluctuations Explained',
    description: 'The market has seen significant fluctuations this week. Read more to understand the factors involved.',
    image: 'https://www.reuters.com/resizer/v2/SLSH6HH5XVKYDNF4CBWRPSBAGE.jpg?auth=186e9abc529427cd3483e7559d5d64be9a612b964cd3f5368ce374fcb7a8e2cf&width=480&quality=80',
    link: '/news/5',
  },
];

const ads = [
  { id: 1, image: 'https://tpc.googlesyndication.com/simgad/2321749211834189627', link: '#' },
  { id: 2, image: 'https://tpc.googlesyndication.com/simgad/17704820894939281964', link: '#' },
  { id: 3, image: 'https://s.adroll.com/a/WZZ/TUS/WZZTUSZR25GCJBXPA6QYPZ.png', link: '#' },
];

const HeroSection = () => {
  return (
    <section className="hero-section container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-red-500">Hot Topics</h1>
        <hr className="border-gray-400 w-1/2 mt-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
        <div className="space-y-4">
          {newsItems.slice(0, 2).map((news) => (
            <article key={news.id} className="flex items-start p-4">
              <img src={news.image} alt={news.title} className="w-96 h-56 object-cover mr-4" /> 
              <div className="flex flex-col w-full">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{news.title}</h2>
                <p className="text-gray-700">{news.description}</p>
                <Link to={news.link} className="text-blue-500 hover:underline mt-4">Read More</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4"> 
          {newsItems.slice(2).map((news) => (
            <article key={news.id} className="flex items-start p-4">
              <img src={news.image} alt={news.title} className="w-48 h-32 rounded-lg object-cover mr-4" /> 
              <div className="flex flex-col w-full">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{news.title}</h2>
                <p className="text-gray-700">{news.description}</p>
                <Link to={news.link} className="text-blue-500 hover:underline mt-4">Read More</Link>
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
                <img src={ad.image} alt={`Ad ${ad.id}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default HeroSection;
