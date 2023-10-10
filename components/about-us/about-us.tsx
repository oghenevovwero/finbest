import ShadedText from "../shaded-text";

function render1() {
  return (
    <div className="p-2">
<img className="rounded-lg" src="/images/fimage1.jpg" alt="illustration" />
    </div>
  );
}

function render2() {
  return (
    <div className="relative h-[500px] w-[900px]">
      <div className="absolute bottom-[75px] left-[7.5%]">
        <img
          className="rounded-lg"
          src="/images/fimage1.jpg"
          alt="illustration"
        />
      </div>
      <div className="absolute bottom-[130px] right-[7.5%]">
        <img
          className="rounded-lg"
          src="/images/fimage2.jpg"
          alt="illustration"
        />
      </div>
    </div>
  );
}

function render3() {
  return (
    <div className="relative h-[500px] w-[500px]">
      <div className="absolute">
        <img
          className="rounded-lg"
          src="/images/fimage1.jpg"
          alt="illustration"
        />
      </div>
      <div className="absolute top-[250px] left-[75px]">
        <img
          className="rounded-lg"
          src="/images/fimage2.jpg"
          alt="illustration"
        />
      </div>
    </div>
  );
}

function render4() {
  return (
    <div className="relative h-[500px] w-[500px]">
      <img
        className="rounded-lg absolute top-[375px] right-[235px]"
        src="/images/fdots.png"
        alt="illustration"
      />
      <img
        className="rounded-lg absolute bottom-[325px] right-[-30px]"
        src="/images/fswirl.png"
        alt="illustration"
      />
      <div className="absolute bottom-[75px] left-[7.5%]">
        <img
          className="rounded-lg"
          src="/images/fimage1.jpg"
          alt="illustration"
        />
      </div>
      <div className="absolute bottom-[-100px] right-[-50px]">
        <img
          className="rounded-lg"
          src="/images/fimage2.jpg"
          alt="illustration"
        />
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 mt-12 place-items-center">
      <div className="md:hidden">{render1()}</div>
      <div className="hidden sm:md:block lg:hidden">{render2()}</div>
      <div className="hidden lg:block xl:hidden">{render3()}</div>
      <div className="hidden xl:block">{render4()}</div>

      <div className="bg-[url('/images/fclockbg.png')] p-5">
        <div className="font-bold text-[22px]">
          <ShadedText leftColor="" rightColor="" text="About Us" />
        </div>
        <div className="text-[40px] sm:text-[55px] lg:text-[70px] text-[#16243E] leading-none font-bold">
          We have reputable customer relationship
        </div>
        <p className="my-10">
          Payment solutions enable businesses to accept payments Payment stions
          enable businesses to accept payments from ctly customers ctly
          securely. stions enable businesses to accept payments from ctly
          customers ctly securely
        </p>
        <div className="grid grid-cols-2 gap-3 font-bold text-[#16243E] text-lg">
          <div className="flex items-center gap-1">
            <div className="border-[1px] w-[9px] h-[9px] border-[#00A6C6] bg-white rounded-full"></div>
            Mistakes To Avoid to dum Auam
          </div>
          <div className="flex items-center gap-1">
            <div className="border-[1px] w-[9px] h-[9px] border-[#00A6C6] bg-white rounded-full"></div>
            Avoid to the dumy mistakes
          </div>
          <div className="flex items-center gap-1">
            <div className="border-[1px] w-[9px] h-[9px] border-[#00A6C6] bg-white rounded-full"></div>
            Your Startup industry stan
          </div>
          <div className="flex items-center gap-1">
            <div className="border-[1px] w-[9px] h-[9px] border-[#00A6C6] bg-white rounded-full"></div>
            Our Startup industry Here
          </div>
        </div>
      </div>
    </section>
  );
}
