export const Button = ({
  id,
  disabled,
  title,
  type = "button",
  onClick,
  className,
  children,
}) => {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      title={title}
      disabled={disabled}
      className={
        "bg-primary px-3 py-2 rounded-lg hover:bg-[#0f0f0f] " + className
      }
    >
      {children}
    </button>
  );
};
