import PortfolioSection from "../Page/Portfolio";
import CardPortofolio from "../Atom/CardPortofolio";
import Design1 from "../../assets/design-1.png";
import Design2 from "../../assets/design-2.jpg";
import Design3 from "../../assets/design-3.jpg";
import Design4 from "../../assets/design-4.jpg";
import Design5 from "../../assets/design-5.jpg";
import Design6 from "../../assets/design-6.jpg";
import Design7 from "../../assets/design-7.jpg";

function Design() {
  return (
    <PortfolioSection layout="columns-4 space-y-4  max-md:columns-2 ">
      <CardPortofolio img={Design1} />
      <CardPortofolio img={Design6} />
      <CardPortofolio img={Design2} />
      <CardPortofolio img={Design3} />
      <CardPortofolio img={Design5} />
      <CardPortofolio img={Design4} />
      <CardPortofolio img={Design7} />
    </PortfolioSection>
  );
}

export default Design;
