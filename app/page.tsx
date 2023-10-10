import XlMainNav from "@/components/navbars/xl-main-nav";
import Introduction from "@/components/introduction/introduction";
import AboutUs from "@/components/about-us/about-us";
import OurServices from "@/components/our-services/our-services";
import OurWorkProcess from "@/components/our-work-process/our-work-process";
import AskAnything from "@/components/ask-anything/ask-anything";
import ClientsTestimonials from "@/components/clients-testimonials/clients-testimonials";
import GetInTouch from "@/components/get-in-touch/get-in-touch";
import Footer from "@/components/footer/footer";
import XlDropNav from "@/components/navbars/xl-drop-nav";
import MiniNav from "@/components/navbars/mini-nav";

export default function Home() {
  return (
    <main>
      <div className="hidden xl:block fixed w-full top-0 right-0 left-0 z-10 bg-white">
        <XlMainNav />
      </div>
      <div className="xl:hidden fixed w-full top-0 right-0 left-0 z-20 bg-white">
        <MiniNav />
      </div>
      <Introduction />
      <AboutUs />
      <OurServices />
      <OurWorkProcess />
      <AskAnything />
      <ClientsTestimonials />
      <GetInTouch />
      <Footer />
    </main>
  );
}
