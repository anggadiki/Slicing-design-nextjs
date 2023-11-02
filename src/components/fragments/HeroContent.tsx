const HeroContent = () => {
  return (
    <div className=" flex py-5">
      <div className=" flex w-5/12 px-20 py-5">
        <p className=" text-white font-semibold text-6xl">
          Leader <br />
          In Childcare <br />
          Juice
        </p>
      </div>
      <div className=" flex w-7/12 justify-end -mt-20">
        <img src="/hero.png" alt="" width="800" height="800" />
      </div>
    </div>
  );
};

export default HeroContent;
