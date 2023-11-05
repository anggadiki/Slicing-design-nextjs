import Button from "../elements/Button";
import CardInfo from "../elements/Card-Info";

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
          <div className=" py-10 pr-32">
            <Button className="py-2">
              Get in touch with us if you <br /> have any questions!
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionInfo;
