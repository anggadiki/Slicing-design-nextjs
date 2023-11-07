import CardMenu from "../elements/Card-Menu";

const SectionMenu = () => {
  return (
    <>
      <div className="">
        <div className="bg-menu">
          <div className=" lg:px-20 sm:px-5">
            <div className=" flex w-12/12 p-2 pt-32 px-5">
              <p className="text-menu px-auto text-bold lg:text-6xl sm:text-4xl font-semibold text-white">
                Top Juice
              </p>
            </div>
          </div>
          <div className=" flex flex-row pt-32">
            <div className=" w-2/12 flex items-center justify-start">
              <div className="xl:w-40 xl:h-20 lg:w-20 lg:h-20 sm:py-2 lg:py-0 bg-white rounded-r-full flex justify-end items-center pr-3">
                <img
                  src="tanda.png"
                  alt=""
                  className="lg:w-16 lg:h-16 sm:w-14 sm:w-14"
                />
              </div>
            </div>
            <div className=" w-8/12 flex flex-row justify-center xl:gap-7 lg:gap-3">
              <CardMenu src="/minuman-1.png" />
              <CardMenu src="/minuman-1.png" />
              <CardMenu src="/minuman-1.png" />
            </div>
            <div className=" w-2/12 flex items-center justify-end">
              <div className="xl:w-40 xl:h-20 lg:w-20 lg:h-20 sm:py-2 lg:py-0 bg-white rounded-l-full flex items-center justify-start pl-3">
                <img
                  src="tanda.png"
                  alt=""
                  className=" lg:w-16 lg:h-16 sm:w-14 sm:h-14 rotate-180"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionMenu;
