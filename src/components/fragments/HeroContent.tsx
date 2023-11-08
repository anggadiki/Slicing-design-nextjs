import Image from "next/image";
import Button from "../elements/Button";

const HeroContent = () => {
  return (
    <div className=" flex md:py-5 sm:py-10 sm:px-1 md:px-0">
      <div className=" flex flex-col md:w-5/12 sm:w-full lg:px-20 lg:pr-2 md:px-5">
        <p className="text-hero text-white font-semibold lg:font-bold xl:text-6xl sm:text-6xl lg:text-[3.45rem] md:text-[2.8rem] pl-5 sm:leading-tight xl:leading-snug">
          Leader <br />
          In Childcare <br />
          Juice
        </p>
        <p className=" text-xl pl-5 md:py-4 sm:py-7 text-white md:shadow-none sm:shadow-black">
          Premium 100% Fruit Juice Concentrate.
          <br />
          No Sugar Added. Non Refrigerated
        </p>
        <Button className=" pl-5">Oder Now</Button>
      </div>
      <div className=" md:flex w-7/12 justify-end lg:-mt-20 md:-mt-0 sm:hidden">
        <Image
          src="/hero.png"
          alt=""
          width="800"
          height="800"
          className=" lg:w-[680px] lg:h-[500px] xl:w-[800px] xl:h[800px] md:w-[400px] md:h-[400px]"
        />
      </div>
    </div>
  );
};

export default HeroContent;
