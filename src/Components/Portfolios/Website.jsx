import CardPortofolio from "../Atom/CardPortofolio";
import PortfolioSection from "../Page/Portfolio";
function Website() {
  return (
    <PortfolioSection>
      <CardPortofolio img="web-1" />
      <CardPortofolio img="web-2" />
    </PortfolioSection>
  );
}

export default Website;
