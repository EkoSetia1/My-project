import ContentLayout from "../Layout/ContentLayout";
import DefaultLayout from "../Layout/DefaultLayout";

function HomeSection() {
  return (
    <DefaultLayout>
      <ContentLayout style=" bg-slate-900  ">
        <main className="  md:mr-64  mt-16">
          <p className="  text-slate-500 text-3xl font-semibold font-REM ">
            i'm
          </p>
          <h1 className="text-6xl text-slate-100 font-REM font-bold ">
            <span className="text-amber-500">E</span>ko Setiawan
          </h1>
          <p className="text-slate-500">Web Developer | Designer</p>

          <button className="mt-16 px-6 py-3  bg-amber-500 text-stone-900 font-semibold rounded-badge hover:bg-amber-600">
            <a href="../../public/Eko Setiawan.pdf">Download CV</a>
          </button>
        </main>
      </ContentLayout>
    </DefaultLayout>
  );
}

export default HomeSection;
