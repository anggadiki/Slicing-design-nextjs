import Image from "next/image";
import Button from "../elements/Button";

const HeroContent = () => {
  return (
    <div className=" flex py-5">
      <div className=" flex flex-col w-5/12 lg:px-20 lg:pr-2 sm:px-5">
        <p className="text-hero text-white font-semibold lg:font-bold xl:text-6xl lg:text-[3.45rem] sm:text-[2.8rem] pl-5 lg:leading-tight xl:leading-snug">
          Leader <br />
          In Childcare <br />
          Juice
        </p>
        <p className=" text-xl pl-5 py-4 text-white">
          Premium 100% Fruit Juice Concentrate.
          <br />
          No Sugar Added. Non Refrigerated
        </p>
        <Button className=" pl-5">Oder Now</Button>
      </div>
      <div className=" md:flex w-7/12 justify-end lg:-mt-20 sm:-mt-0">
        <Image
          src="/hero.png"
          alt=""
          width="800"
          height="800"
          className=" lg:w-[680px] lg:h-[500px] xl:w-[800px] xl:h[800px] sm:w-[400px] sm:h-[400px]"
        />
      </div>
    </div>
  );
};

export default HeroContent;
