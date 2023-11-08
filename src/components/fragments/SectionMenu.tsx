import CardMenu from "../elements/Card-Menu";
import SwiperMobile from "../elements/Swiper";

const SectionMenu = () => {
  return (
    <>
      <div className="">
        <div className="bg-menu">
          <div className=" lg:px-20 md:px-5">
            <div className=" flex w-12/12 p-2 pt-32 px-5 md:justify-normal sm:justify-center">
              <p className="text-menu px-auto text-bold lg:text-6xl md:text-4xl sm:text-6xl font-semibold text-white">
                Top Juice
              </p>
            </div>
          </div>
          <div className=" md:flex flex-row pt-32 sm:hidden">
            <div className=" w-2/12 flex items-center justify-start">
              <div className="xl:w-40 xl:h-20 lg:w-20 lg:h-20 md:py-2 lg:py-0 bg-white rounded-r-full flex justify-end items-center pr-3">
                <img
                  src="tanda.png"
                  alt=""
                  className="lg:w-16 lg:h-16 md:w-14 md:w-14"
                />
              </div>
            </div>
            <div className=" w-8/12 flex flex-row justify-center xl:gap-7 lg:gap-3">
              <CardMenu src="/minuman-1.png" />
              <CardMenu src="/minuman-1.png" />
              <CardMenu src="/minuman-1.png" />
            </div>
            <div className=" w-2/12 flex items-center justify-end">
              <div className="xl:w-40 xl:h-20 lg:w-20 lg:h-20 md:py-2 lg:py-0 bg-white rounded-l-full flex items-center justify-start pl-3">
                <img
                  src="tanda.png"
                  alt=""
                  className=" lg:w-16 lg:h-16 md:w-14 md:h-14 rotate-180"
                />
              </div>
            </div>
          </div>
          <div className=" sm:flex md:hidden py-5">
            <SwiperMobile />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionMenu;
