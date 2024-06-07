function Input(props) {
  const { type, name } = props;
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={name}
      className="border-0 border-b-2  outline-none  pt-4 pb-2  bg-transparent placeholder:text-stone-700 placeholder:font-REM font-REM focus:border-stone-900 placeholder:capitalize"
    />
  );
}

export default Input;
