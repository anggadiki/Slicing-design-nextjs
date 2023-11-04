import HeroContent from "@/components/fragments/HeroContent";
import Navbar from "@/components/fragments/Navbar";

const Hero = () => {
  return (
    <div className="bg-hero">
      <div className="">
        <Navbar />
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
