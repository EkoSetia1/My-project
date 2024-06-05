import CardPortofolio from "../Atom/CardPortofolio";
import PortfolioSection from "../Page/Portfolio";
function Website() {
  return (
    <PortfolioSection>
      <CardPortofolio img="web-1.jpg" />
      <CardPortofolio img="web-2.jpg" />
    </PortfolioSection>
  );
}

export default Website;
