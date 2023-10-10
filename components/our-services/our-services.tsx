import Image from "next/image";
import ShadedText from "../shaded-text";

const cardInfos: {
  title: string;
  detail: string;
  iconUrl: string;
  imageUrl: string;
}[] = [
  {
    title: "Revive Business",
    detail:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    iconUrl: "/images/distributed.svg",
    imageUrl: "/images/fimage12.jpg",
  },
  {
    title: "Propel Consulting",
    detail:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    iconUrl: "/images/light.svg",
    imageUrl: "/images/fimage3.jpg",
  },
  {
    title: "Velocity Solutions",
    detail:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    iconUrl: "/images/offer.svg",
    imageUrl: "/images/fimage4.jpg",
  },
];

export default function OurServices() {
  return (
    <section className="bg-[#F6F6F9] px-4 lg:px-[140px] pt-[100px] pb-[150px] relative">
      <div className="font-bold text-[28px]">
      <ShadedText leftColor="#005071" rightColor="#00A9C9" text="Our services" />
      </div>
      <div className="flex justify-between items-center mb-14">
        <div className="text-[38px] text-[#16243E] leading-none font-bold">
          Innovate to dominate with us
        </div>
        <div className="max-lg:hidden">
          <button className="rounded-full p-6 mr-4 bg-[#D8E5EB] text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 36 14"
              fill="none"
            >
              <path
                d="M0.982455 7.83955L0.983687 7.8406L8.1282 13.5799C8.66343 14.0099 9.52687 14.0054 10.0568 13.5699C10.5867 13.1343 10.5824 12.4327 10.0472 12.0027L5.25034 8.14942L34.1313 8.05543C34.8844 8.05298 35.4934 7.55486 35.4914 6.94282C35.4894 6.33077 34.8772 5.83663 34.124 5.83908L5.2432 5.93307L10.0147 2.04865C10.5471 1.61517 10.5469 0.913529 10.0142 0.481465C9.48138 0.0492887 8.61787 0.0506035 8.08551 0.483973L0.978506 6.26966L0.977281 6.27071C0.444586 6.70563 0.448586 7.40954 0.982455 7.83955Z"
                fill="#004D6E"
              />
            </svg>
            {""}
          </button>
          <button className="rounded-full p-6 bg-[#D8E5EB] text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 36 14"
              fill="none"
            >
              <path
                d="M35.0175 7.83955L35.0163 7.8406L27.8718 13.5799C27.3366 14.0099 26.4731 14.0054 25.9432 13.5699C25.4133 13.1343 25.4176 12.4327 25.9528 12.0027L30.7497 8.14942L1.86875 8.05543C1.11556 8.05298 0.506635 7.55486 0.508627 6.94282C0.510619 6.33077 1.12277 5.83663 1.87596 5.83908L30.7568 5.93307L25.9853 2.04865C25.4529 1.61517 25.4531 0.913529 25.9858 0.481465C26.5186 0.0492887 27.3821 0.0506035 27.9145 0.483973L35.0215 6.26966L35.0227 6.27071C35.5554 6.70563 35.5514 7.40954 35.0175 7.83955Z"
                fill="#004D6E"
              />
            </svg>
            {""}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 gap-y-12 mb-[120px]">
        {cardInfos.map((cardInfo) => (
          <div key={cardInfo.title} className="rounded-lg bg-white px-2 md:px-10 pb-10 pt-16 relative">
            <div className="absolute top-[-28px] right-[30px] rounded-lg w-14 bg-gradient-to-tr from-[#16243E] to-[#009CBD] p-2">
              <Image src={cardInfo.iconUrl} width={40} height={40} alt="icon" />
            </div>
            <div className="font-bold text-[26px] text-[#16243E] mb-4">
              {cardInfo.title}
            </div>
            <div className="mb-8">{cardInfo.detail}</div>
            <img src={cardInfo.imageUrl} className="w-full" alt="card image" />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="absolute bottom-[-140px] left-[10%] right-[10%] rounded-lg flex flex-col xl:flex-row items-center justify-between gap-14 px-[100px] py-[10px] lg:py-[80px] bg-gradient-to-tr from-[#16243E] to-[#009CBD]">
          <img src="/images/logoipsum1.png" alt="logo" />
          <img src="/images/logoipsum2.png" alt="logo" />
          <img src="/images/logoipsum3.png" alt="logo" />
          <img src="/images/logoipsum4.png" alt="logo" />
        </div>
      </div>
    </section>
  );
}
