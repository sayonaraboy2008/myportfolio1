import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbSquareRoundedLetterXFilled } from "react-icons/tb";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="headCon fixed w-full pt-[30px] pb-[15px] bluebg ">
        <header className="font-roboto flex max-w-[1280px] max-[768px]:items-start justify-between items-center m-auto  ">
          <div className="head-logo pl-[20px] ">
            {/* <img src="" alt="" /> */}
            <h2 className="text-white">
              <a href="/">Barkamol</a>
            </h2>
          </div>
          <ul
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              isOpen ? "translate-x-0, " : "-translate-x-[200%]"
            }   flex relative max-[768px]:absolute max-[768px]:flex-col min-[768px]:translate-x-0 xirabg   max-[768px]:w-full max-[768px]:z-10 max-[768px]:bg-[#0a192f] max-[768px]:py-[30px] max-[768px]:justify-center max-[768px]:min-h-[100vh] justify-between items-center gap-[50px] xiraclr transform transition-transform duration-700 ease-in-out`}>
            <button className=" absolute max-[768px]:block text-white top-[0] right-[20px] text-[40px]  hidden">
              <TbSquareRoundedLetterXFilled />
            </button>
            <li>
              <a href="/#about" className="flex gap-[8px]">
                <span className="spanclr">01.</span>About
              </a>
            </li>
            <li>
              <a href="/#experience" className="flex gap-[8px]">
                <span className="spanclr">02.</span>Experience
              </a>
            </li>
            <li>
              <a href="/#work" className="flex gap-[8px]">
                <span className="spanclr">03.</span>Work
              </a>
            </li>
            <li>
              <a href="/#contact" className="flex gap-[8px]">
                <span className="spanclr">04.</span>Contact
              </a>
            </li>
            <div className="bg-[#64ffda] rounded-[4px]">
              <button className="hoverbtn bg-[#0a192f] rounded-[4px] py-[6px] px-[10px] border border-[#64ffda]">
                Resume
              </button>
            </div>
          </ul>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-[25px] pr-[20px] hidden  max-[768px]:block ">
            <RxHamburgerMenu />
          </button>
        </header>
      </div>
    </>
  );
}

export default Header;
