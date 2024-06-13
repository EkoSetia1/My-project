import { useEffect } from "react";
import ContentLayout from "../Layout/ContentLayout";
import DefaultLayout from "../Layout/DefaultLayout";
import Aos from "aos";
import "aos/dist/aos.css";

function HomeSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <DefaultLayout>
      <ContentLayout style=" bg-slate-900  ">
        <main className="  md:mr-64  mt-16">
          <p
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="200"
            className="  text-slate-500 text-3xl font-semibold font-REM "
          >
            i'm
          </p>
          <h1
            data-aos="fade-right"
            className="text-6xl text-slate-100 font-REM font-bold "
          >
            <span className="text-amber-500">E</span>ko Setiawan
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="text-slate-500"
          >
            Web Developer | Designer
          </p>

          <button
            data-aos="fade-up-right"
            data-aos-delay="800"
            data-aos-duration="300"
            className="mt-16 px-6 py-3  bg-amber-500 text-stone-900 font-semibold rounded-badge hover:bg-amber-600"
          >
            <a href="../../public/Eko Setiawan.pdf">Download CV</a>
          </button>
        </main>
      </ContentLayout>
    </DefaultLayout>
  );
}

export default HomeSection;
