export default function AskAnything() {
  return (
    <section className="bg-[#005071] mt-[250px] bg-[url('/images/blue-bg.png')] p-5 lg:px-[120px] grid grid-cols-1 lg:grid-cols-2">
      <div className="text-white p-16">
        <div className="text-[20px]">ASK ANYTHING</div>
        <div className="text-[42px] font-bold mb-7">
          Learn about how <br /> Finbest works
        </div>
        <div className="mb-7">
          Fact that a reader will be distrol acted bioiiy desig the.ished fact
          <br />
          that a reader will be distrol acted bioiiy bioiiy desig the.ished fact{" "}
          <br />
          that a reader ished fact tha
        </div>
        <div className="flex gap-3">
          <div className="bg-white flex gap-3 items-center rounded-lg text-black p-3">
            <div className="p-3 bg-[#005071] rounded-full">
              <img src="/images/trophy.svg" alt="happy clients" />
            </div>
            <div>
              <span className="font-extrabold text-[30px] text-[#16243E]">
                10+
              </span>
              <br />
              <span className="font-bold text-[20px] text-[#16243E]">
                Experiences
              </span>
            </div>
          </div>
          <div className="bg-white flex gap-3 items-center rounded-lg text-black p-3">
            <div className="px-3 py-4 bg-[#005071] rounded-full">
              <img
                width={28}
                height={28}
                className="object-cover"
                src="/images/clients.svg"
                alt="happy clients"
              />
            </div>
            <div>
              <span className="font-extrabold text-[30px] text-[#16243E]">
                500+
              </span>
              <br />
              <span className="font-bold text-[20px] text-[#16243E]">
                Happy Client
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="rounded-lg absolute top-36 left-[10%] right-[10%] bg-white p-10 shadow-2xl">
          <div className="flex bg-gradient-to-tr from-[#16243E] to-[#75c9eb] text-white justify-between border-[1px] border-gray-200 p-5 mb-5 rounded-lg font-bold">
            <div className="">What is business consulting?</div>
          </div>
          <div className="flex justify-between border-[1px] border-gray-200 p-5 mb-5 rounded-lg font-bold text-[#16243E]">
            <div>
              What types of businesses typically use consulting services?
            </div>
            {/* <img src="/images/down-arrow-svg.svg" alt="expand accordion" /> */}
          </div>
          <div className="flex justify-between border-[1px] border-gray-200 p-5 mb-5 rounded-lg font-bold text-[#16243E]">
            <div>
              What are the benefits of using a business consulting service?
            </div>
          </div>
          <div className="flex justify-between border-[1px] border-gray-200 p-5 mb-5 rounded-lg font-bold text-[#16243E]">
            <div>How much do consulting services cost?</div>
          </div>
        </div>
      </div>
    </section>
  );
}
