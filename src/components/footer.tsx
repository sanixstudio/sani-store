import { SiApple, SiAsus, SiDell, SiHp } from "react-icons/si";

export default function Footer() {
  return (
    <section className="relative overflow-hidden py-10 border-t bg-gray-50">
      <div className="relative mx-auto max-w-[1440px] px-4">
        <div className="m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="w-fit">
              <a href="/" className="flex gap-2">
                <div>
                  <span className="inline-block text-xl md:text-2xl lg:text-3xl px-2 bg-[#E93D83] text-white rounded-md">
                    S
                  </span>
                  <span className="lg:inline-block text-xl md:text-2xl lg:text-3xl font-bold text-[#E93D83]">
                    ANI
                  </span>
                </div>
                <div>
                  <span className="inline-block px-2 text-xl md:text-2xl lg:text-3xl bg-slate-700 text-white rounded-md">
                    S
                  </span>
                  <span className="lg:inline-block text-xl md:text-2xl lg:text-3xl font-bold text-slate-700">
                    TORE
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="/all-products"
                  >
                    All
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="flex gap-2 items-center text-base font-medium text-gray-900 hover:text-gray-700"
                    href="/apple"
                  >
                    <SiApple />
                    <span>Apple</span>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="flex gap-2 items-center text-base font-medium text-gray-900 hover:text-gray-700"
                    href="/asus"
                  >
                    <SiAsus />
                    <span>Asus</span>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="flex gap-2 items-center text-base font-medium text-gray-900 hover:text-gray-700"
                    href="/dell"
                  >
                    <SiDell />
                    <span>Dell</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex gap-2 items-center text-base font-medium text-gray-900 hover:text-gray-700"
                    href="/hp"
                  >
                    <SiHp />
                    <span>Hp</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="about"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Other
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="cart"
                  >
                    Cart
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="wishlist"
                  >
                    Wishlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
