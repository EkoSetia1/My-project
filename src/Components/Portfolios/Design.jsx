import PortfolioSection from "../Page/Portfolio";
function Design() {
  return (
    <PortfolioSection>
      <main className="grid grid-cols-3 p-4 gap-4 mt-8">
        <img
          src="../src/assets/Portfolio/Mockup-Design-1.jpg"
          alt=""
          className="shadow-md rounded-md hover:scale-105 transition-all"
        />
        <img
          src="../src/assets/Portfolio/Mockup-Design-2.jpg"
          alt=""
          className="shadow-md rounded-md hover:scale-105 transition-all"
        />
        <img
          src="../src/assets/Portfolio/Mockup-Design-3.jpg"
          alt=""
          className="shadow-md rounded-md hover:scale-105 transition-all"
        />
        <img
          src="../src/assets/Portfolio/Mockup-Design-4.jpg"
          alt=""
          className="shadow-md rounded-md hover:scale-105 transition-all"
        />
      </main>
    </PortfolioSection>
  );
}

export default Design;
