import Button from "../elements/Button";

const SectionInfo = () => {
  return (
    <>
      <section>
        <div className="">
          <div className=" flex px-20">
            <div className=" flex w-6/12 pl-5 -mt-14 font-semibold text-6xl text-[#F68533]">
              <p className="text-juice">Penny Juice</p>
            </div>
            <div className=" flex w-6/12 justify-center pr-5 -mt-56">
              <img src="/jeruk.png" alt="" width="400" height="400" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" flex text-center justify-center px-20">
          <div className=" w-4/12 px-5">
            <div className=" flex justify-center pb-5">
              <img src="/fruit-1.png" alt="" width="100" height="100" />
            </div>
            <div className=" flex h-auto px-5 justify-start py-10 border-[4px] border-[#F68533] rounded-lg text-[#F68533] font-semibold">
              <p className=" px-10 py-2 leading-relaxed">
                Get delicious and nutritious 100% fruit juice from Penny Juice
                of America. Customers prefer our products for their benefits,
                features, variety, service, and competitive pricing.
              </p>
            </div>
          </div>
          <div className=" w-4/12 px-5">
            <div className=" flex justify-center pb-5">
              <img src="/fruit-2.png" alt="" width="100" height="100" />
            </div>
            <div className=" flex h-auto px-5 justify-start py-10 border-[4px] border-[#F68533] rounded-lg text-[#F68533] font-semibold">
              <p className=" px-10 py-2 leading-relaxed">
                Get delicious and nutritious 100% fruit juice from Penny Juice
                of America. Customers prefer our products for their benefits,
                features, variety, service, and competitive pricing.
              </p>
            </div>
          </div>
          <div className=" w-4/12 px-5">
            <div className=" flex justify-center pb-5">
              <img src="/fruit-3.png" alt="" width="100" height="100" />
            </div>
            <div className=" flex h-auto px-5 justify-start py-10 border-[4px] border-[#F68533] rounded-lg text-[#F68533] font-semibold">
              <p className=" px-10 py-2 leading-relaxed">
                Get delicious and nutritious 100% fruit juice from Penny Juice
                of America. Customers prefer our products for their benefits,
                features, variety, service, and competitive pricing.
              </p>
            </div>
            <div className=" py-10">
              <Button className="">
                Get in touch with us if you have any questions!
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionInfo;
