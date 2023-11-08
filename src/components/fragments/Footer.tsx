import Button from "../elements/Button";

const Footer = () => {
  return (
    <div className="">
      <div className=" flex lg:px-20 md:px-5 sm:px-1 md:-mt-0 sm:-mt-10 ">
        <div className=" flex flex-col lg:w-5/12 sm:w-6/12 px-5 -mt-12 xl:-mt-28 lg:-mt-36 md:-mt-48 sm:-mt-0">
          <div className=" py-1 font-semibold lg:text-6xl sm:text-4xl text-[#F68533]">
            <p className="text-juice">About</p>
          </div>
          <div className=" flex justify-start">
            <div className="py-8 w-auto font-semibold lg:text-xl sm:text-base pr-60 text-[#F68533] xl:pr-36 lg:pr-2 sm:pr-4">
              <p className="text">
                Were a family-owned business that was founded in 2001. We have
                over 40 years of experience in the beverage industry.
              </p>
            </div>
          </div>
          <Button>539-386-1999</Button>
        </div>
        <div className=" lg:w-7/12 sm:w-6/12">
          <div className=" flex justify-center -mt-32 xl:-mt-44 lg:px-3 lg:-mr-10 lg:-mt-52 md:-mt-64 sm:-mt-0  ">
            <img src="/Footer.png" alt=" footer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
