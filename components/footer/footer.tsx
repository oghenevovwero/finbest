import Image from "next/image";
import {
  FaCalendarDays,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#16243E] text-white mt-[240px] pt-[150px] pb-8 bg-cover bg-[url('/images/footer-bg.png')] relative">
      <div className="max-lg:hidden grid grid-cols-1 lg:grid-cols-2 place-items-center bg-[#0194B5] bg-[url('/images/sign-bg.png')] p-20 mx-[140px]  rounded-lg absolute top-[-120px] left-0 right-0">
        <div className="font-bold text-[28px]">
          Get notified about the event! <br /> Subscribe today
        </div>
        <div className="w-full relative">
          <input
            className="rounded-lg p-5 w-full text-black"
            placeholder="Email address"
          />
          <button className="bg-gradient-to-r from-[#243a63] to-[#0194B5] absolute right-1 py-4 top-1 px-10 rounded-lg">
            <div className="flex gap-2 items-center">
              <FaEnvelope />
              <div className="font-bold">Subscribe</div>
            </div>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 px-10 lg:px-[140px] mt-10">
        <div className="px-3">
          <Image
            src="/images/finbest-logo.png"
            width={148}
            height={98}
            alt="logo"
          />
          <p className="text-[18px] mt-8">
            Payment processing is a critical component of any business that
            sells goods or se Payment processing is a critical component of any.
          </p>
          <div className="flex gap-3 mt-8">
            <div className="p-3 bg-[#39455C] rounded-md">
              <FaFacebookF />
            </div>
            <div className="p-3 bg-[#39455C] rounded-md">
              <FaTwitter />
            </div>
            <div className="p-3 bg-[#39455C] rounded-md">
              <FaInstagram />
            </div>
            <div className="p-3 bg-[#39455C] rounded-md">
              <FaPinterest />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-8 font-bold text-[25px]">Quick links</div>
          <div className="mb-6 font-semibold text-[16px]">About Us</div>
          <div className="mb-6 font-semibold text-[16px]">Categories</div>
          <div className="mb-6 font-semibold text-[16px]">Services</div>
          <div className="mb-6 font-semibold text-[16px]">Blog Grid</div>
          <div className="mb-6 font-semibold text-[16px]">Contact Us</div>
        </div>
        <div>
          <div className="mb-8 font-bold text-[25px]">Popular post</div>
          <div className="font-bold text-[20px]">Ished fact that a reader</div>
          <div className="flex items-center gap-3 mb-6">
            <FaCalendarDays />
            <div>October 19, 2023</div>
          </div>
          <div className="font-bold text-[20px]">Will diesel acted desig</div>
          <div className="flex items-center gap-3 mb-6">
            <FaCalendarDays />
            <div>October 19, 2023</div>
          </div>
          <div className="font-bold text-[20px]">
            Transforming business for you
          </div>
          <div className="flex items-center gap-3 mb-6">
            <FaCalendarDays />
            <div>October 19, 2023</div>
          </div>
        </div>
        <div>
          <div className="mb-8 font-bold text-[25px]">Contact us</div>
          <div className="rounded-lg border-[1px] border-gray-400 flex items-center justify-center p-8">
            <div>
              <div className="flex gap-3">
                <FaLocationDot />
                <div>6391 Elgin St. Celina, 10299</div>
              </div>
              <div className="flex gap-3 my-6">
                <FaPhone />
                <div>216 200 6141</div>
              </div>
              <div className="flex gap-3">
                <FaLocationDot />
                <div>info@example.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 bg-gray-700" />
      <div className="flex flex-col lg:flex-row justify-between px-2 lg:px-[140px]">
        <div>Finbest 2023 | All Rights Reserved</div>
        <div className="flex flex-col md:flex-row gap-6">
          <div>About us</div>
          <div>Categories</div>
          <div>Services</div>
          <div>Contact Us</div>
        </div>
      </div>
    </footer>
  );
}
