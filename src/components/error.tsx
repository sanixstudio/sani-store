import Layout from "../layout/Layout";

const Error = ({ error = "Something went wrong" }: { error?: string }) => {
  return (
    <Layout>
      <div className="max-w-[1440px] mx-auto h-[calc(100vh-500px)] px-4 py-16 justify-center items-center">
        <span className="text-3xl font-bold text-center text-red-500">{error}</span>
      </div>
    </Layout>
  );
};

export default Error;
