import Button from "../elements/Button";

const Footer = () => {
  return (
    <div className="">
      <div className=" flex px-20">
        <div className=" flex flex-col w-5/12 px-5 -mt-12">
          <div className=" py-1 font-semibold text-6xl text-[#F68533]">
            <p className="text-juice">About</p>
          </div>
          <div className=" flex justify-start">
            <div className="py-8 w-auto font-semibold text-xl pr-60 text-[#F68533]">
              <p className="text">
                Were a family-owned business that was founded in 2001. We have
                over 40 years of experience in the beverage industry.
              </p>
            </div>
          </div>
          <Button>539-386-1999</Button>
        </div>
        <div className=" w-7/12">
          <div className=" flex justify-center px-10 -mt-32 ">
            <img src="/Footer.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
