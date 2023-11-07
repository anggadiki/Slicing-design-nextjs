import Image from "next/image";

const CardMenu = (props: any) => {
  const { src } = props;
  return (
    <div className=" flex py-10 lg:px-5 sm:px-3 ">
      <div className="card-menu xl:w-60 xl:h-80 lg:w-60 lg:h-70 bg-[#FFBA83] rounded-3xl lg:py-8 sm:py-2">
        <div className=" mx-auto bg-[#FF9948] rounded-full w-44 h-44 -mt-24"></div>
        <Image
          src={src}
          alt=""
          width="150"
          height="150"
          className=" mx-auto -mt-[17.8rem] rounded-b-full"
        />
        <div className="text-menu-top py-4 px-3 lg:py-2">
          <p className="text-white font-semibold lg:text-4xl sm:text-3xl">
            Banana <br />
            Juice
          </p>
          <p className="text-white font-semibold py-3">
            Order juice with many choices here{" "}
          </p>
          <div className=" ml-auto lg:-mt-6 sm:-mt-2 rounded-full bg-white w-12 h-12">
            <img src=" cart.png" alt="" className=" mx-auto w-10 h-10 p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
