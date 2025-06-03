import React from "react";
import Worked from "../components/Worked";
import { Link } from "react-router-dom";
import SendMessage from "../components/SendMessage";
import SendAlert from "../components/SendAlert";
import SecondSection from "../components/SecondSection";
import Builds from "../components/Builds";
function Main() {
  return (
    <>
      {/* First Section */}
      <section
        id="barkamol"
        className="max-w-[1280px] m-auto pt-[140px] md:h-[100vh]  flex flex-col items-start text-center md:text-left px-[20px]">
        <p className="firali spanclr mx-auto md:m-0">Hi, my name is</p>
        <h2 className="text-[#8892b0] font-[600] pt-[30px] pb-[20px] mx-auto md:mx-0 urbanistli text-[7vw] leading-[6vw]">
          <span className="text-[#ccd6f6] ">Barkamol.</span> <br /> I create
          various websites
        </h2>
        <p className="urbanistli text-[14px] md:text-[18px] pb-[3vw] text-[#8892b0] max-w-[540px] mx-auto md:m-0 leading-[27px]">
          I'm a software engineer who specializes in building (and sometimes
          designing) awesome websites. I am currently focusing on creating human
          centric products available on APINLINE.
        </p>
        <div className="bg-[#64ffda] rounded-[4px] mx-auto md:m-0">
          <button className="bg-[#0a192f] spanclr firali rounded-[4px] text-[14px] md:text-[22px] md:py-[16px] md:px-[28px]  py-[8px] px-[14px] border border-[#64ffda] hoverbtn">
            Check out my course!
          </button>
        </div>
      </section>
      {/* Second Section */}
      <section
        id="about"
        className="px-[20px] max-w-[900px] mx-auto  py-10 md:pt-[170px] flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="about-left order-2 md:order-1 w-full md:w-1/2">
          <h3 className="urbanistli text-2xl md:text-[32px] font-semibold text-[#ccd6f6]">
            <span className="spanclr text-lg md:text-[23px]">01. </span>About Me
          </h3>
          <div className="about-textbox flex flex-col gap-4 pt-6 pb-6">
            <p className="xiraclr text-base md:text-[18px]">
              Hello there! My name is Barkamol, I like to create websites. My
              interest in programming started in 2022. I am working in Visual
              Studio Code and now I am creating some amazing websites.
            </p>
            <p className="xiraclr text-base md:text-[18px]">
              Contact me and I will make you a big and beautiful website. It
              needs
              <span className="spanclr"> website information</span>,{" "}
              <span className="spanclr">images</span> and{" "}
              <span className="spanclr">website logo</span>.
            </p>
            <p className="xiraclr text-base md:text-[18px]">
              I recently joined Apinline. And I am working with that company.
            </p>
            <p className="xiraclr text-base md:text-[18px] font-semibold">
              Programs I know:
            </p>
          </div>

          {/* Skills */}
          <div className="askills grid grid-cols-2 gap-y-4">
            {[
              "HTML",
              "CSS",
              "Bootstrap",
              "TailwindCSS",
              "JavaScript",
              "REACT JS",
            ].map((skill) => (
              <details className="spanclr" key={skill}>
                <summary className="xiraclr cursor-pointer">{skill}</summary>
              </details>
            ))}
          </div>
        </div>

        <div className="about-right order-1 md:order-2 w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-h-[80vh] rounded-xl shadow-lg"
            src="https://i.pinimg.com/736x/ef/b9/0a/efb90a48271c4709c74828315466ed41.jpg"
            alt="About Image"
          />
        </div>
      </section>
      {/* Thrid Section - worked */}
      <section
        id="experience"
        className="px-[20px] max-w-[600px] mx-auto py-[70px] pt-[80px]">
        <div className="worked-top pb-[40px]">
          <h3 className="urbanistli text-[32px] font-semibold text-[#ccd6f6]">
            <span className="spanclr text-[23px]">02. </span>Where I’ve Worked
          </h3>
        </div>
        <Worked />
      </section>
      {/* Section 4 */}
      <section
        id="work"
        className="px-[20px] max-w-[1280px] m-auto py-[80px] text-center">
        <div className="worked-top pb-[40px]">
          <h3 className="urbanistli text-[32px] font-semibold text-[#ccd6f6]">
            <span className="spanclr text-[23px]">03. </span>Some Things I’ve
            Built
          </h3>
        </div>
        {/* Builds */}
        <div>
          <Builds />
        </div>
      </section>
      {/* Section contact */}
      <section
        id="contact"
        className="px-[20px] max-w-[600px] flex flex-col gap-[20px] py-[50px] items-center m-auto text-center">
        <p className="spanclr firali">04. What’s Next?</p>
        <h3 className="urbanistli text-[7vw] leading-[6vw] font-semibold text-[#ccd6f6]">
          Get In Touch
        </h3>
        <p className="xiraclr">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <div className="bg-[#64ffda] rounded-[4px]">
          <Link to="/contact">
            <button className="bg-[#0a192f] spanclr firali rounded-[4px] py-[16px] px-[28px] border border-[#64ffda] hoverbtn">
              Say Hello
            </button>
          </Link>
        </div>
        {/* <SendMessage /> */}
        {/* <SendAlert /> */}
      </section>
      {/* Ending */}
      <footer>
        <div className="text-center py-[40px]">
          <p className="firali xiraclr">Built by Barkamol</p>
        </div>
      </footer>
    </>
  );
}

export default Main;
