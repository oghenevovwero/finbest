import ShadedText from "../shaded-text";

export default function OurWorkProcess() {
  return (
    <section className="px-4 mt-[170px] bg-[#F6F6F9] h-[700px] grid grid-cols-1 md:grid-cols-2 lg:px-[140px] pt-[100px] pb-16">
      <div>
        <div className="font-bold text-[24px] text-[#004E6D]">
          <ShadedText
            leftColor="#005071"
            rightColor="#00A9C9"
            text="OUR WORK PROCESS"
          />
        </div>
        <div className="text-[#16243E] font-bold text-[42px] mb-5">
          We offer a wide variety of loans
        </div>
        <div className="flex gap-10 mb-8">
          <div className="w-[2px] bg-gray-300" />
          <img src="/images/ploan.svg" alt="icon" />
          <div>
            <div className="text-[28px] text-[#16243E] font-bold mb-5">
              Personal loans
            </div>
            <div>
              Allows flexible use, short to moderate-term repayment options and
              relatively quick funding.
            </div>
          </div>
        </div>
        <div className="flex gap-10 mb-8">
          <div className="w-[2px] bg-gray-300" />
          <img src="/images/iloan.svg" alt="icon" />
          <div>
            <div className="text-[28px] text-[#16243E] font-bold mb-5">
              Installment loans
            </div>
            <div>
              Allows flexible use, short- to moderate-term repayment options and
              relatively quick funding.
            </div>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-[2px] bg-gray-300" />
          <img src="/images/pdloan.svg" alt="icon" />
          <div>
            <div className="text-[28px] text-[#16243E] font-bold mb-5">
              Payday loans
            </div>
            <div>
              Allows flexible use, short- to moderate-term repayment options and
              relatively quick funding.
            </div>
          </div>
        </div>
      </div>
      <div className="relative p-3 lg:p-24">
        <div className="lg:absolute bottom-0">
          <img
            className="max-lg:w-full max-lg:mb-3"
            src="/images/fimage6.jpg"
            alt="illustration"
          />
        </div>
        <div className="lg:absolute left-0">
          <img
            className="max-lg:w-full"
            src="/images/fimage5.jpg"
            alt="illustration"
          />
        </div>
      </div>
    </section>
  );
}
