import React from "react";
import { Link, useLocation } from "react-router-dom";
function DefaultLayout(props) {
  const { children } = props;

  // activeLink
  let { pathname } = useLocation();
  let subpage = pathname.split("/")[1];

  function Linkness(type = null) {
    let classes = "hover:text-slate-100 px-4 py-2 rounded-full";
    if (type === subpage) {
      classes += " bg-stone-900 text-slate-100";
    } else {
      classes += "";
    }
    return classes;
  }
  // end active link

  return (
    <div className="flex min-h-screen">
      <div className="bg-amber-500 w-[20%]">
        <div className=" h-[40%] bg-cover bg-[url('../src/assets/ayano.jpg')]"></div>
        <nav className="flex justify-center text-xl items-center font-semibold h-[60%]">
          <ul className="flex flex-col items-center gap-8 cursor-pointer">
            <li className={Linkness("Home")}>
              <Link to="/Home">Home</Link>
            </li>
            <li className={Linkness("About")}>
              <Link to="/About">About</Link>
            </li>

            <li className={Linkness("Portfolio")}>
              <Link to="/Portfolio/Website">Portfolio</Link>
            </li>
            <li className={Linkness("Contact")}>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bg-slate-100 w-[80%] ">{children}</div>
    </div>
  );
}

export default DefaultLayout;
