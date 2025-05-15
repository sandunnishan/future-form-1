import HeroSection from '@/components/home/HeroSection';
import LatestArticles from '@/components/home/LatestArticles';
import TrendingTopics from '@/components/home/TrendingTopics';
import SubscribeSection from '@/components/home/SubscribeSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LatestArticles />
      <TrendingTopics />
      <SubscribeSection />
    </>
  );
}