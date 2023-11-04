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
            <div className=" w-8/12 flex flex-row justify-center">
              <div className=" flex py-10 px-5 ">
                <div className="card-menu w-60 h-80 bg-[#FFBA83] rounded-3xl py-8">
                  <div className=" mx-auto bg-[#FF9948] rounded-full w-44 h-44 -mt-24"></div>
                  <img
                    src="/minuman-1.png"
                    alt=""
                    width="150px"
                    height="150px"
                    className=" mx-auto -mt-[17.8rem]"
                  />
                  <div className="text-menu-top py-4 px-3">
                    <p className="text-white font-semibold text-4xl">
                      Banana <br />
                      Juice
                    </p>
                    <p className="text-white font-semibold py-3">
                      Order juice with many choices here{" "}
                    </p>
                    <div className=" ml-auto -mt-6 rounded-full bg-white w-12 h-12">
                      <img
                        src=" cart.png"
                        alt=""
                        className=" mx-auto w-10 h-10 p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex py-10 px-5 ">
                <div className="card-menu w-60 h-80 bg-[#FFBA83] rounded-3xl py-8">
                  <div className=" mx-auto bg-[#FF9948] rounded-full w-44 h-44 -mt-24"></div>
                  <img
                    src="/minuman-1.png"
                    alt=""
                    width="150px"
                    height="150px"
                    className=" mx-auto -mt-[17.8rem]"
                  />
                  <div className="text-menu-top py-4 px-3">
                    <p className="text-white font-semibold text-4xl">
                      Banana <br />
                      Juice
                    </p>
                    <p className="text-white font-semibold py-3">
                      Order juice with many choices here{" "}
                    </p>
                    <div className=" ml-auto -mt-6 rounded-full bg-white w-12 h-12">
                      <img
                        src=" cart.png"
                        alt=""
                        className=" mx-auto w-10 h-10 p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex py-10 px-5 ">
                <div className="card-menu w-60 h-80 bg-[#FFBA83] rounded-3xl py-8">
                  <div className=" mx-auto bg-[#FF9948] rounded-full w-44 h-44 -mt-24"></div>
                  <img
                    src="/minuman-1.png"
                    alt=""
                    width="150px"
                    height="150px"
                    className=" mx-auto -mt-[17.8rem]"
                  />
                  <div className="text-menu-top py-4 px-3">
                    <p className="text-white font-semibold text-4xl">
                      Banana <br />
                      Juice
                    </p>
                    <p className="text-white font-semibold py-3">
                      Order juice with many choices here{" "}
                    </p>
                    <div className=" ml-auto -mt-6 rounded-full bg-white w-12 h-12">
                      <img
                        src=" cart.png"
                        alt=""
                        className=" mx-auto w-10 h-10 p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-2/12 flex items-center justify-end">
              <div className="w-40 h-20 bg-white rounded-l-full flex items-center pl-3">
                <img src="tanda.png" alt="" className=" w-16 h-16 rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" min-h-screen"></div>
    </>
  );
};

export default SectionMenu;
