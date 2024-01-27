import { MdOutlineLocalShipping } from "react-icons/md";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";

import useScreenSize from "../../hooks/useScreenSize";

const Features = () => {
  const screenSize = useScreenSize();
  let iconSize = 64;

  switch (screenSize) {
    case "sm":
      iconSize = 48;
      break;
    default:
      break;
  }

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        <div className="flex items-center justify-center gap-6 py-4 border border-[#E93D82] rounded-md">
          <div>
            <MdOutlineLocalShipping color="#E93D83" size={iconSize} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-slate-700">
              Free Shipping
            </span>
            <span className="text-slate-500">Orders over $100</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 py-4 border border-[#E93D82] rounded-md">
          <div>
            <LiaHandHoldingUsdSolid color="#E93D83" size={iconSize} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-slate-700">
              Return Policy
            </span>
            <span className="text-slate-500">30 Days money return</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 py-4 border border-[#E93D82] rounded-md">
          <div>
            <MdOutlineSupportAgent color="#E93D83" size={iconSize} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-slate-700">
              24/7 Support
            </span>
            <span className="text-slate-500">Customer support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
