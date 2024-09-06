import HeroSection from '../component/HeroSection';
import TrendingNews from './TrendingNews';
import LocalNews from './LocalNews';

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
