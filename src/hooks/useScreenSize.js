import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize);

  function getScreenSize() {
    const width = window.innerWidth;

    if (width < 576) {
      return "xs";
    } else if (width >= 576 && width < 768) {
      return "sm";
    } else if (width >= 768 && width < 992) {
      return "md";
    } else if (width >= 992 && width < 1200) {
      return "lg";
    } else {
      return "xl";
    }
  }

  useEffect(() => {
    function handleResize() {
      const newSize = getScreenSize();
      setScreenSize(newSize);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
