import { Link } from "react-router-dom";
import ContentLayout from "../Layout/ContentLayout";
import DefaultLayout from "../Layout/DefaultLayout";

function PortfolioSection(props) {
  const { children } = props;
  return (
    <DefaultLayout>
      <ContentLayout title="Portfolio">
        <main className="flex flex-col items-center">
          <nav>
            <ul className="flex gap-8 text-3xl font-semibold">
              <li>
                <Link to="/Portfolio/Website">Website</Link>
              </li>
              <li>
                <Link to="/Portfolio/Design">Design</Link>
              </li>
              <li>
                <Link to="/Portfolio/Photography">Photography</Link>
              </li>
            </ul>
          </nav>
          <section>{children}</section>
        </main>
      </ContentLayout>
    </DefaultLayout>
  );
}

export default PortfolioSection;
