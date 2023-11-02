import HeroContent from "@/components/fragments/HeroContent";
import Navbar from "@/components/fragments/Navbar";

const HeroViews = () => {
  return (
    <div className="bg-hero">
      <div className="container">
        <Navbar />
        <HeroContent />
      </div>
    </div>
  );
};

export default HeroViews;
