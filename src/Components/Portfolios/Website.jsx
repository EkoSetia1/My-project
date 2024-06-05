import CardPortofolio from "../Atom/CardPortofolio";
import PortfolioSection from "../Page/Portfolio";

import Web1 from "../../assets/web-1.jpg";
import Web2 from "../../assets/web-2.jpg";
function Website() {
  return (
    <PortfolioSection>
      <CardPortofolio img={Web1} />
      <CardPortofolio img={Web2} />
    </PortfolioSection>
  );
}

export default Website;
