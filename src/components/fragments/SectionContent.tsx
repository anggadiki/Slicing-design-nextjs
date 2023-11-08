import Image from "next/image";
import Button from "../elements/Button";
import CardInfo from "../elements/Card-Info";

const SectionInfo = () => {
  return (
    <>
      <section>
        <div className="">
          <div className=" flex md:px-5 lg:px-20 xl:py-0 lg:py-5 md:pb-10 sm:px-0">
            <div className=" flex w-6/12 pl-5 xl:-mt-14 font-semibold lg:text-6xl md:text-4xl sm:text-4xl text-[#F68533] lg:-mt-32 md:-mt-28 sm:-mt-32 ">
              <p className="text-juice">Penny Juice</p>
            </div>
            <div className=" flex w-6/12 justify-center md:pr-5 xl:-mt-56 xl:pr-0 xl:justify-end lg:justify-end lg:pr-0 sm:-mt-80 sm:pb-20 md:pb-0">
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
        <div className=" flex text-center justify-center lg:px-20 md:px-5">
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
          <div className=" lg:py-10 lg:pr-24 md:py-14 md:pr-10 sm:py-12 sm:pr-5">
            <Button className="md:py-2">
              Get in touch with us if you <br /> have any questions!
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionInfo;
