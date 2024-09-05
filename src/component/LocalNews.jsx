import { Link } from 'react-router-dom';


const localNews = [
  {
    id: 1,
    title: 'Breaking: Major Event Shakes the World',
    description: 'A major event has occurred, impacting the world significantly. Click to read more about the developments.',
    image: 'https://www.reuters.com/resizer/v2/RL7F53W5OJIRPGFMQUMLS4R3MU.jpg?auth=d7ee7ba2ff82f2f514b5b4dbb1b02bc4e1f612cd549bbeaad3ce751b43f9c090&width=1080&quality=80',
    link: '/news/1',
  },
  {
    id: 2,
    title: 'Technology Advances: What You Need to Know',
    description: 'New technological advances are transforming industries. Stay informed about the latest trends.',
    image: 'https://www.reuters.com/resizer/v2/2CXYYH3BLJJSDKRELOKJ4ZD25Y.jpg?auth=a10c96a84c707296eae3628c51737fb19ed26cc79a6ad27909dcb83241699fd1&width=480&quality=80',
    link: '/news/2',
  },
 
  {
    id: 4,
    title: 'Sports: Highlights from the Biggest Games',
    description: 'Catch up on the highlights from the most exciting games in sports this week.',
    image: 'https://www.reuters.com/resizer/v2/XNSJJUAXFVJK5MAZCVLACTZOEU.jpg?auth=70523670952d9f1d4f22f7520a6a2aee58154fa27484b78e38486f2927802fe8&width=480&quality=80',
    link: '/news/4',
  },
  {
    id: 5,
    title: 'Health: Tips for a Balanced Lifestyle',
    description: 'Explore tips and advice on maintaining a balanced and healthy lifestyle.',
    image: 'https://www.reuters.com/resizer/v2/XNSJJUAXFVJK5MAZCVLACTZOEU.jpg?auth=70523670952d9f1d4f22f7520a6a2aee58154fa27484b78e38486f2927802fe8&width=480&quality=80',
    link: '/news/5',
  },
];


const LocalNews = () => {
    return (
      <section id='local-news' className="local-news container mx-auto p-4 ">
        <h1 className="text-3xl font-bold text-red-500 ">Local News </h1>
        <hr className="border-gray-400 w-1/2 mt-2 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {localNews.map((news) => (
            <article key={news.id} className="flex items-center border p-4 rounded-lg shadow-md bg-white">
              <img src={news.image} alt={news.title} className="w-32 h-32 rounded-lg object-cover mr-4" />
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-gray-900">{news.title}</h2>
                <p className="text-gray-700 mt-2">{news.description}</p>
                <Link to={news.link} className="text-blue-500 hover:underline mt-2">Read More</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  };
  
  export default LocalNews;