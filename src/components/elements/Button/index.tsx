const Button = (props: any) => {
  const { children, className } = props;
  return (
    <div className=" pl-5">
      <button className={className}>{children}</button>
    </div>
  );
};

export default Button;
