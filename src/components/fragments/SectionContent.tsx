import Image from "next/image";
import Button from "../elements/Button";
import CardInfo from "../elements/Card-Info";

const SectionInfo = () => {
  return (
    <>
      <section>
        <div className="">
          <div className=" flex sm:px-5 lg:px-20 xl:py-0 lg:py-5 sm:pb-10">
            <div className=" flex w-6/12 pl-5 xl:-mt-14 font-semibold lg:text-6xl sm:text-4xl text-[#F68533] lg:-mt-32 sm:-mt-28 ">
              <p className="text-juice">Penny Juice</p>
            </div>
            <div className=" flex w-6/12 justify-center pr-5 xl:-mt-56 xl:pr-0 xl:justify-end lg:justify-end lg:pr-0 lg:-mt-80 sm:-mt-80">
              <Image
                src="/jeruk.png"
                alt=""
                width="400"
                height="400"
                className=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" flex text-center justify-center lg:px-20 sm:px-5">
          <CardInfo src="/fruit-1.png">
            Get delicious and nutritious 100% fruit juice from Penny Juice of
            America. Customers prefer our products for their benefits, features,
            variety, service, and competitive pricing.
          </CardInfo>
          <CardInfo src="/fruit-2.png">
            Get delicious and nutritious 100% fruit juice from Penny Juice of
            America. Customers prefer our products for their benefits, features,
            variety, service, and competitive pricing.
          </CardInfo>
          <CardInfo src="/fruit-3.png">
            Get delicious and nutritious 100% fruit juice from Penny Juice of
            America. Customers prefer our products for their benefits, features,
            variety, service, and competitive pricing.
          </CardInfo>
        </div>
        <div className=" flex w-12/12 justify-end">
          <div className=" lg:py-10 lg:pr-24 sm:py-14 sm:pr-10">
            <Button className="sm:py-2">
              Get in touch with us if you <br /> have any questions!
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionInfo;
