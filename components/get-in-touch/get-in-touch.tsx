import {
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";

export default function GetInTouch() {
  return (
    <section className="m-24 lg:m-[140px] shadow-lg p-20 relative">
      <div className="text-[48px] font-bold mb-3 text-[#16243E]">
        Get in touch
      </div>
      <div className="mb-10 text-[#16243E]">
        We are here for you! how can we help, We are here for you!
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <input
            placeholder="Your name"
            className="p-6 w-full border-[1px] border-gray-300 rounded-lg"
          />
          <input
            placeholder="Email here"
            className="p-6 w-full my-7 border-[1px] border-gray-300 rounded-lg"
          />
          <textarea
            cols={33}
            placeholder="Message here"
            className="p-6 resize-none w-full border-[1px] border-gray-300 rounded-lg"
          />
          <button className="w-full text-white mt-7 py-6 rounded-lg bg-gradient-to-r from-[#16243E] to-[#005071]">
            Submit
          </button>
        </div>
        <div>
          <div className="flex items-center border-[1px] border-gray-300 gap-5 p-7 rounded-lg">
            <FaLocationDot size={50} color="#005071" />
            <div>
              <div className="text-[#16243E] font-bold text-[20px]">
                Address
              </div>
              <p className="text-[#16243E]">
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </p>
            </div>
          </div>
          <div className="flex my-10 items-center border-[1px] border-gray-300 gap-5 p-7 rounded-lg">
            <FaEnvelope size={50} color="#005071" />
            <div>
              <div className="text-[#16243E] font-bold text-[20px]">
                Mail Us
              </div>
              <p className="text-[#16243E]">tanya.hill@example.com</p>
              <p className="text-[#16243E]">sara.crue@example.com</p>
            </div>
          </div>
          <div className="flex items-center border-[1px] border-gray-300 gap-5 p-7 rounded-lg">
            <FaPhone size={50} color="#005071" />
            <div>
              <div className="text-[#16243E] font-bold text-[20px]">
                Telephone
              </div>
              <p className="text-[#16243E]">+216 200 6141</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[80px] right-[-57px] bg-[#005071] p-5 rounded-tr-lg rounded-br-lg">
        <div className="mb-5">
          <FaFacebookF color="white" />
        </div>
        <div className="border-y-[1px] border-y-gray-500 py-5">
          <FaTwitter color="white" />
        </div>
        <div className="mt-5">
          <FaInstagram color="white" />
        </div>
      </div>
    </section>
  );
}
