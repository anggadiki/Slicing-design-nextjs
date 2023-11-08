import Image from "next/image";

const CardInfo = (props: any) => {
  const { children, src } = props;
  return (
    <div className=" w-4/12 px-5 mx-auto">
      <div className=" flex justify-center pb-5">
        <Image
          src={src}
          alt=""
          width="100"
          height="100"
          className=" sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]"
        />
      </div>
      <div className=" flex border-[#F68533] border-[4px] rounded-lg py-16 xl:px-1 mx-auto justify-center  xl:py-12 lg:py-9 lg:px-2 md:py-8 md:px-2 sm:px-1">
        <div className=" flex mx-auto text-[#F68533] font-semibold w-80 h-auto">
          <p className="leading-relaxed xl:leading-7 xl:py-2 md:line-clamp-5 sm:line-clamp-4">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
