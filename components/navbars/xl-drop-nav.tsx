import { FaSearch } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import Image from "next/image";

export default function XlDropNav({}: {}) {
  return (
    <nav className="flex py-5 justify-between items-center px-20">
      <div className="w-[25%]">
        <Image
          src="/images/finbest-logo-drop-xl-nav.png"
          width={148}
          height={98}
          alt="logo"
        />
      </div>
      <div className="flex-grow flex gap-6 font-bold mt-5 text-[16px] text-[#16243E]">
        <div>Home</div>
        <div>About Us</div>
        <div>Services</div>
        <div>Contact</div>
      </div>
      <div className="w-[25%] flex gap-6 mt-2">
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
    </nav>
  );
}
