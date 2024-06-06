import { Link } from "react-router-dom";
function Service(props) {
  const { Icon, title, children, link } = props;
  return (
    <Link
      to={`/Portfolio/${link}`}
      className="flex max-md:flex-col gap-4 max-md:gap-2 items-center hover:shadow-md max-md:w-3/4 max-md:p-2 "
    >
      <Icon size={150} strokeWidth={1} className=" h-20" />
      <div className="max-md:text-center">
        <h1 className="font-semibold text-lg">{title}</h1>
        <p className="text-xs leading-3 text-slate-500 ">{children}</p>
      </div>
    </Link>
  );
}
export default Service;
