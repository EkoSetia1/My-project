import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "react-feather";

import Aos from "aos";
import "aos/dist/aos.css";
function DefaultLayout(props) {
  const { children } = props;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
    <div className="flex  min-h-screen text-stone-900 ">
      {/* tombol humbeger */}
      <Menu
        className="absolute z-30 md:hidden left-3 top-3 "
        size={30}
        color="#f59e0b"
        onClick={() => {
          document
            .querySelector(".Navbar-active")
            .classList.toggle("-left-full");
          // alert("hello");
        }}
      />
      <div className="md:hidden  Navbar-active absolute z-10 bg-amber-500 -left-full top-1/2  -translate-y-1/2 rounded-r-lg p-4 shadow-md">
        <ul className="flex flex-col items-center gap-8 cursor-pointer font-semibold">
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
      </div>

      {/* end tombol humbeger */}
      <div className="bg-amber-500 w-[20%] max-md:hidden fixed left-0 top-0 bottom-0 ">
        <div className=" h-[40%] bg-cover bg-center bg-[url('../src/assets/ayano.jpg')] "></div>
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

      <div className="bg-slate-100 right-0 absolute  w-[80%] max-md:w-full text-stone-900 ">
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
