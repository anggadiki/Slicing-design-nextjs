const CardMenu = (props: any) => {
  const { src } = props;
  return (
    <div className=" flex py-10 px-5 ">
      <div className="card-menu xl:w-60 xl:h-80 lg:w-60 lg-h-70 bg-[#FFBA83] rounded-3xl py-8">
        <div className=" mx-auto bg-[#FF9948] rounded-full w-44 h-44 -mt-24"></div>
        <img
          src={src}
          alt=""
          width="150px"
          height="150px"
          className=" mx-auto -mt-[17.8rem] rounded-b-full"
        />
        <div className="text-menu-top py-4 px-3 lg:py-2">
          <p className="text-white font-semibold text-4xl">
            Banana <br />
            Juice
          </p>
          <p className="text-white font-semibold py-3">
            Order juice with many choices here{" "}
          </p>
          <div className=" ml-auto -mt-6 rounded-full bg-white w-12 h-12">
            <img src=" cart.png" alt="" className=" mx-auto w-10 h-10 p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
