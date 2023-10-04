import Marquee from "react-fast-marquee";
import IconsList from "./IconsList";

function Main() {
  return (
    <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 relative">
      <div className="container z-10">
        <div>
          <p className="text-white open-sans mb-4">
            Hello, my name is Svitlana
          </p>
          <div className="text-7xl font-semibold ">
            I’m a frontend developer
          </div>
        </div>
        <img src="./me.png" alt="Svitlana" />
      </div>
      <Marquee className="absolute bottom-4">
        <IconsList />
        <IconsList />
      </Marquee>
    </div>
  );
}

export default Main;
