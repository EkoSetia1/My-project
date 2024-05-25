function Service(props) {
  const { Icon, title, children } = props;
  return (
    <div className="flex gap-4 items-center">
      <Icon size={150} className=" h-20" />
      <div>
        <h1 className="font-semibold text-lg">{title}</h1>
        <p className="text-xs leading-3 text-slate-500 ">{children}</p>
      </div>
    </div>
  );
}
export default Service;
