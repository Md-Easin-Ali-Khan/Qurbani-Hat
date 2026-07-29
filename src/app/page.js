import Hero_section from "@/components/hero";
import FeaturedAnimals from "@/components/home/FeaturedAnimals";
import QurbaniTips from "@/components/home/QurbaniTips";
import TopBreeds from "@/components/home/TopBreeds";

export default function Home() {
  return (
    <>
      <Hero_section />
      <FeaturedAnimals />
      <QurbaniTips />
      <TopBreeds />
    </>
  );
}
