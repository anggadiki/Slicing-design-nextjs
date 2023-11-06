import Button from "../elements/Button";

const HeroContent = () => {
  return (
    <div className=" flex py-5">
      <div className=" flex flex-col w-5/12 px-20 lg:pr-2">
        <p className="text-hero text-white font-semibold lg:font-bold xl:text-6xl lg:text-[3.45rem] pl-5 leading-tight">
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
      <div className=" flex w-7/12 justify-end -mt-20">
        <img
          src="/hero.png"
          alt=""
          width="800"
          height="800"
          className=" lg:w-[650px] lg:h-[500px]"
        />
      </div>
    </div>
  );
};

export default HeroContent;
