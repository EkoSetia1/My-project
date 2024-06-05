import { ArrowRight } from "react-feather";
function CardPortofolio(props) {
  const { img } = props;
  return (
    <div className="relative">
      <img src={`../src/assets/Portfolio/${img} `} />
      <div className="w-full h-full absolute bg-black opacity-0 hover:opacity-80 transition-all duration-500 top-0 right-0 left-0 bottom-0 cursor-pointer flex justify-center items-center gap-2 text-slate-100">
        View page
        <ArrowRight size={18} />
      </div>
    </div>
  );
}

export default CardPortofolio;
