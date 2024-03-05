export const Input = ({
  title,
  type = "text",
  readOnly = false,
  min,
  max,
  minLength,
  maxLength,
  required = false,
  className,
  name,
  id,
  disabled,
  placeholder,
  step,
  onChange,
  value,
}) => {
  return (
    <input
      type={type}
      className={
        "border border-secondary active:border-primary bg-light rounded-md text-white px-3 py-2 " +
        className
      }
      readOnly={readOnly}
      min={min}
      max={max}
      minLength={minLength}
      maxLength={maxLength}
      required={required}
      name={name}
      id={id}
      autoComplete="off"
      disabled={disabled}
      placeholder={placeholder}
      title={title}
      step={step}
      onChange={onChange}
      value={value}
    />
  );
};
