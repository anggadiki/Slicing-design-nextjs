import CardMenu from "../elements/Card-Menu";

const SectionMenu = () => {
  return (
    <>
      <div className="">
        <div className="bg-menu">
          <div className=" px-20">
            <div className=" flex w-12/12 p-2 pt-32 px-5">
              <p className="text-menu px-auto text-bold text-6xl font-semibold text-white">
                Top Juice
              </p>
            </div>
          </div>
          <div className=" flex flex-row pt-32">
            <div className=" w-2/12 flex items-center justify-start">
              <div className="w-40 h-20 bg-white rounded-r-full flex justify-end items-center pr-3">
                <img src="tanda.png" alt="" className=" w-16 h-16" />
              </div>
            </div>
            <div className=" w-8/12 flex flex-row justify-center gap-7">
              <CardMenu src="/minuman-1.png" />
              <CardMenu src="/minuman-1.png" />
              <CardMenu src="/minuman-1.png" />
            </div>
            <div className=" w-2/12 flex items-center justify-end">
              <div className="w-40 h-20 bg-white rounded-l-full flex items-center pl-3">
                <img src="tanda.png" alt="" className=" w-16 h-16 rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionMenu;
