import { ArrowRight } from "react-feather";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function CardPortofolio(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const { img } = props;
  return (
    <div data-aos="zoom-in-up" className="relative rounded-lg overflow-hidden">
      <img src={`${img}`} />
      <div className="w-full h-full absolute bg-black opacity-0 hover:opacity-80 transition-all duration-500 top-0 right-0 left-0 bottom-0 cursor-pointer flex justify-center items-center gap-2 text-slate-100">
        View project
        <ArrowRight size={18} />
      </div>
    </div>
  );
}

export default CardPortofolio;
