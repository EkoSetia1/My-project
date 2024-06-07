import PortfolioSection from "../Page/Portfolio";
import CardPortofolio from "../Atom/CardPortofolio";
import Photo1 from "../../assets/photo-1.jpg";
import Photo2 from "../../assets/photo-2.jpg";
import Photo3 from "../../assets/photo-3.jpg";
import Photo4 from "../../assets/photo-4.jpg";
import Photo5 from "../../assets/photo-5.jpg";
import Photo6 from "../../assets/photo-6.jpg";
import Photo7 from "../../assets/photo-7.jpg";
import Photo8 from "../../assets/photo-8.jpg";
import Photo9 from "../../assets/photo-9.jpg";
import Photo10 from "../../assets/photo-10.jpg";
import Photo11 from "../../assets/photo-11.jpg";
import Photo12 from "../../assets/photo-12.jpg";
function Photography() {
  return (
    <PortfolioSection layout="columns-4 space-y-4  max-md:columns-2 ">
      <CardPortofolio img={Photo1} />
      <CardPortofolio img={Photo3} />
      <CardPortofolio img={Photo4} />
      <CardPortofolio img={Photo5} />
      <CardPortofolio img={Photo6} />
      <CardPortofolio img={Photo7} />
      <CardPortofolio img={Photo2} />
      <CardPortofolio img={Photo8} />
      <CardPortofolio img={Photo9} />
      <CardPortofolio img={Photo10} />
      <CardPortofolio img={Photo11} />
      <CardPortofolio img={Photo12} />
    </PortfolioSection>
  );
}

export default Photography;
