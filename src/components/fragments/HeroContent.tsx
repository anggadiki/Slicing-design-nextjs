import Button from "../elements/Button";

const HeroContent = () => {
  return (
    <div className=" flex py-5">
      <div className=" flex flex-col w-5/12 px-20">
        <p className="text-hero text-white font-semibold text-6xl pl-5 leading-tight">
          Leader <br />
          In Childcare <br />
          Juice
        </p>
        <p className=" text-xl pl-5 py-4 text-white">
          Premium 100% Fruit Juice Concentrate.
          <br />
          No Sugar Added. Non Refrigerated
        </p>
        <Button className="button flex items-center w-40 h-10 bg-[#F8DF00] rounded-md justify-center text-white text-xl p-5 font-semibold">
          Oder Now
        </Button>
      </div>
      <div className=" flex w-7/12 justify-end -mt-20">
        <img src="/hero.png" alt="" width="800" height="800" />
      </div>
    </div>
  );
};

export default HeroContent;
