const CardsContainer = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto my-2 flex justify-center flex-wrap gap-4">
      {children}
    </div>
  );
};

export default CardsContainer;
