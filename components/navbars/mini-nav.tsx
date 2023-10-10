import { FaSearch } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import Image from "next/image";

export default function MiniNav() {
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
      <div>
        <img src="/images/burger.svg" alt="stub" width={30} height={30} />
      </div>
    </nav>
  );
}
