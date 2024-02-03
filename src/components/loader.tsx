import SyncLoader from "react-spinners/SyncLoader";
import Layout from "../layout/Layout";

export default function Loader() {
  return (
    <Layout>
      <div className="w-full h-[calc(100vh-500px)] flex justify-center items-center">
        <SyncLoader
          color={"#E93D83"}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </Layout>
  );
}
