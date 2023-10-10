import Image from "next/image";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaSearchengin,
  FaSistrix,
  FaTwitter,
} from "react-icons/fa6";

import { FaSearch } from "react-icons/fa";

export default function XlMainNav({}: {}) {
  return (
    <nav className="flex justify-between">
      <div className="relative flex flex-grow">
        <hr className="absolute left-0 right-0 top-[42px]" />
        <div
          style={{
            clipPath: "polygon(0px 0px, 100% 0px, 76.57% 100.79%, 0% 100%)",
          }}
          className="bg-gradient-to-tr p-[38px] from-[#005273] to-[#00b0c7] w-[32%] flex items-center justify-center"
        >
          <Image
            src="/images/finbest-logo.png"
            width={148}
            height={98}
            className="mr-24"
            alt="logo"
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between py-2 pl-7 pr-16 items-center">
            <div className="flex gap-[6px] items-center">
              <div>
                <FaLocationDot size={16} color="#00698A" />
              </div>
              6391 Elgin St. Celina, 10299
            </div>
            <div className="flex gap-6">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
          <div className="flex my-2 justify-between items-center pr-5">
            <div className="flex gap-6 font-bold mt-5 text-[16px] text-[#16243E]">
              <div>Home</div>
              <div>About Us</div>
              <div>Services</div>
              <div>Contact</div>
            </div>
            <div className="flex gap-6 mt-2">
              <div>
                <button className="bg-[#F4F5FA] rounded-full p-5">
                  <FaSearch size={20} color="black" />
                  {""}
                </button>
              </div>
              <div>
                <button className="rounded-full bg-gradient-to-tr p-[16px] from-[#004E6D] to-[#00b7bd]">
                  <FaPhone size={25} color="white" />
                  {""}
                </button>
              </div>
              <div className="flex flex-col text-[20px] items-center">
                <div>Request a call</div>
                <div className="font-medium">+211 210 1881</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F5FA] w-[21%] flex justify-center items-center">
        <button className="rounded-[45px] font-bold text-[14px] text-white py-5 px-12 bg-gradient-to-tr from-[#004E6D] to-[#0081bd]">
          <div className="flex gap-2 items-center">
            Get started
            <FaArrowRight />
          </div>
        </button>
      </div>
    </nav>
  );
}
