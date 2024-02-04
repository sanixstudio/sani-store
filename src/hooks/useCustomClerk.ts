import { useClerk } from "@clerk/clerk-react";

const useCustomClerk = () => {
  const clerk = useClerk();
  return clerk;
};

export default useCustomClerk;
