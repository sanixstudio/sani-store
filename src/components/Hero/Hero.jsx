import { Link } from "react-router-dom";
import bg from "../../assets/images/bg.jpg";

export default function Hero() {
  return (
    <div className="bg-gradient-to-t text-white from-transparent overflow-hidden to-pink-500/10 h-[600px] max-h-[400px] md:max-h-[600px] flex items-center justify-center">
      <div
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
        className="w-full max-w-[1440px] h-full flex justify-center items-center"
      >
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Explore products,
                <br />
                with best shopping experience
              </h1>
              <p className="mt-6 text-lg leading-8 ">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
                <Link
                  to="#"
                  className="text-sm font-semibold leading-6"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
