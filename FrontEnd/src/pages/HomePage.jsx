import Button from "../components/Button";
import PageNav from "../components/PageNav";
import GridDots from "../components/GridDots";
function HomePage() {
  return (
    <div className="relative h-screen w-full bg-home-image bg-cover bg-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <PageNav />
      <h1 className="absolute top-[30%] left-[8%] text-white font-bold text-5xl leading-snug font-Poppins tracking-wide">
        Efficient Pharmacy Stock
        <br /> Management Made Easy
      </h1>
      <p className="absolute top-[52%] left-[8%] text-white font-normal text-lg leading-normal font-Poppins tracking-normal">
        Effortlessly monitor stock levels, prevent shortages,
        <br /> and ensure smooth operations.
      </p>
      <div className=" absolute top-[70%] left-[8%] flex justify-center gap-4 mb-8">
        <Button variant="primary" size="lg" className="font-bold">
          Get Started
        </Button>
        <Button variant="secondary" size="lg" className="font-bold">
          Explore Features
        </Button>
      </div>
      <div className="z-[999] absolute bottom-[0%] right-[5%]">
        <img src="pharmacist-1.png" />
      </div>
      <div className="z-0 absolute bottom-[30%] right-[26%]">
        <GridDots />
      </div>
      <div className="z-0 absolute bottom-[0%] right-[5%]">
        <GridDots />
      </div>
    </div>
  );
}

export default HomePage;
