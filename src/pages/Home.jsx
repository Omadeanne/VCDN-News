import HeroSection from '../component/HeroSection';
import TrendingNews from '../component/TrendingNews';
import LocalNews from '../component/LocalNews';

function Home() {
  return (
    <div>
      <HeroSection />
      <TrendingNews />
      <LocalNews />
    </div>
  );
}

export default Home;
