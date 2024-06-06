import { Link, useLocation } from "react-router-dom";
import ContentLayout from "../Layout/ContentLayout";
import DefaultLayout from "../Layout/DefaultLayout";

function PortfolioSection(props) {
  let { pathname } = useLocation();
  let subpage = pathname;

  function Linkness(type = null) {
    let classes = " px-4 py-2 rounded-full";
    if (type === subpage) {
      classes += " bg-stone-900 text-slate-100";
    } else {
      classes += "";
    }
    return classes;
  }
  const { children, layout = "grid grid-cols-2" } = props;
  return (
    <DefaultLayout>
      <ContentLayout title="Portfolio">
        <main className="flex flex-col items-center">
          <nav>
            <ul className="flex gap-8 max-md:gap-0 text-3xl max-md:text-lg font-semibold">
              <li className={Linkness("/Portfolio/Website")}>
                <Link to="/Portfolio/Website">Website</Link>
              </li>
              <li className={Linkness("/Portfolio/Design")}>
                <Link to="/Portfolio/Design">Design</Link>
              </li>
              <li className={Linkness("/Portfolio/Photography")}>
                <Link to="/Portfolio/Photography">Photography</Link>
              </li>
            </ul>
          </nav>
          <section className={`mt-8 ${layout} max-md:grid-cols-1 gap-4`}>
            {children}
          </section>
        </main>
      </ContentLayout>
    </DefaultLayout>
  );
}

export default PortfolioSection;
