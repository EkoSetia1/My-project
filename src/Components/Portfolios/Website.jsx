import PortfolioSection from "../Page/Portfolio";
function Website() {
  return (
    <PortfolioSection>
      <main className="grid grid-cols-3 p-4 gap-4 mt-8">
        <img
          src="../src/assets/Portfolio/Mockup-Website-Portfolio-1.jpg"
          alt=""
          className="shadow-md rounded-md hover:scale-105 transition-all"
        />
        <img
          src="../src/assets/Portfolio/Mockup-Website-Portfolio-2.jpg"
          alt=""
          className="shadow-md rounded-md hover:scale-105 transition-all"
        />
        <img
          src="../src/assets/Portfolio/Mockup-Website-Portfolio-2.jpg"
          alt=""
          className="shadow-md rounded-md hover:scale-105 transition-all"
        />
        <img
          src="../src/assets/Portfolio/Mockup-Website-Portfolio-2.jpg"
          alt=""
          className="shadow-md rounded-md hover:scale-105 transition-all"
        />
      </main>
    </PortfolioSection>
  );
}

export default Website;
