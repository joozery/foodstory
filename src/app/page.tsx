import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeFeatures from "@/components/sections/home/HomeFeatures";
import HomeLogoSlider from "@/components/sections/home/HomeLogoSlider";
import HomeVideoFacebook from "@/components/sections/home/HomeVideoFacebook";
import HomeCardSwap from "@/components/sections/home/HomeCardSwap";
import HomeGallery from "@/components/sections/home/HomeGallery";
import HomeKnowledge from "@/components/sections/home/HomeKnowledge";
import HomeFAQ from "@/components/sections/home/HomeFAQ";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <HomeLogoSlider />
        <HomeFeatures />
        <HomeVideoFacebook />
        <HomeCardSwap />
        <HomeGallery />
        <HomeKnowledge />
        <HomeFAQ />
      </main>
      <Footer />
    </>
  );
}
