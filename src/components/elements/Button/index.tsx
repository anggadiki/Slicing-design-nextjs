const Button = (props: any) => {
  const { children, className } = props;
  return (
    <div className={className}>
      <button className="button flex items-center w-auto h-auto bg-[#F8DF00] rounded-md justify-center text-white text-xl p-2 px-8 font-semibold">
        {children}
      </button>
    </div>
  );
};

export default Button;
