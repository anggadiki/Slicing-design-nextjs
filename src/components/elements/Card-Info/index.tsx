const CardInfo = (props: any) => {
  const { children, src } = props;
  return (
    <div className=" w-4/12 px-5 mx-auto">
      <div className=" flex justify-center pb-5">
        <img src={src} alt="" width="100" height="100" />
      </div>
      <div className=" flex border-[#F68533] border-[4px] rounded-lg py-16 xl:px-1 mx-auto justify-center  xl:py-12 lg:py-9 lg:px-2">
        <div className=" flex mx-auto text-[#F68533] font-semibold w-80 h-auto">
          <p className="leading-relaxed xl:leading-7 xl:py-2">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
