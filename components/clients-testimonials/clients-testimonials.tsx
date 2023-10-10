import { FaStar } from "react-icons/fa6";
import ScrollBackBtn from "../scroll-back-btn";
import ScrollForwardBtn from "../scroll-fwd-btn";
import ShadedText from "../shaded-text";

export default function ClientsTestimonials() {
  return (
    <section className="bg-[#F6F6F9] h-[650px] mt-[150px]  flex flex-row-reverse relative">
      <img
        style={{
          clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0 100%)",
        }}
        className="bg-[#005071] w-1/2"
        src="/images/map-bg.png"
        alt="background image"
      />
      <div className="py-[100px]">
        <div className="absolute top-[80px] left-[50px] right-[50px] bottom-0">
          <div className="font-bold text-[18px] ml-4 lg:ml-[90px]">
            <ShadedText
              leftColor="#005071"
              rightColor="#00A9C9"
              text="CLIENTS TESTIMONIAL"
            />
          </div>
          <div className="text-[#16243E] text-[42px] font-bold ml-4 lg:ml-[90px] mb-10">
            Unleashing the power <br /> of your business
          </div>
          <div className="flex gap-7 items-center ml-4 lg:mx-[90px]">
            <div className="max-xl:hidden">
              <ScrollBackBtn />
            </div>
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div className="flex flex-col sm:flex-row rounded-lg bg-white">
                <img
                  className="rounded-l-lg"
                  src="/images/fimage7.jpg"
                  alt="card image"
                />
                <div className="p-8">
                  <div className="flex mb-5">
                    <FaStar color="orange" />
                    <FaStar color="orange" />
                    <FaStar color="orange" />
                    <FaStar color="#D1D1D7" />
                    <FaStar color="#D1D1D7" />
                  </div>
                  <p className="mb-5">
                    Don't just take our word for it hear what our customers have
                    to say about us! we have helped thousand people Don't just
                    take our{" "}
                  </p>
                  <div className="flex justify-between">
                    <div className="text-[#16243E] font-semibold text-[18px]">
                      Sahanaz sakil
                    </div>
                    <img src="/images/quote.png" alt="emphasis icon" />
                  </div>
                  <div className="text-gray-400">Customer</div>
                </div>
              </div>
              <div className="max-lg:hidden flex rounded-lg bg-white flex-grow">
                <img
                  className="rounded-l-lg"
                  src="/images/fimage8.jpg"
                  alt="card image"
                />
                <div className="p-8">
                  <div className="flex mb-5">
                    <FaStar color="orange" />
                    <FaStar color="orange" />
                    <FaStar color="orange" />
                    <FaStar color="#D1D1D7" />
                    <FaStar color="#D1D1D7" />
                  </div>
                  <p className="mb-5">
                    Don't just take our word for it hear what our customers have
                    to say about us! we have helped thousand people Don't just
                    take our{" "}
                  </p>
                  <div className="flex justify-between">
                    <div className="text-[#16243E] font-semibold text-[18px]">
                      Sahanaz sakil
                    </div>
                    <img src="/images/quote.png" alt="emphasis icon" />
                  </div>
                  <div className="text-gray-400">Customer</div>
                </div>
              </div>
            </div>
            <div className="max-xl:hidden">
              <ScrollForwardBtn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
