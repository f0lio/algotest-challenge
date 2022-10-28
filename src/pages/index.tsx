import LegBuilder from "@components/LegBuilder";
import Layout from "@components/Layout";
import LegBuilderContainer from "@components/LegBuilder/LegBuilderContainer";

export default function Home() {
  return (
    <Layout>
      <div className="p-20 w-full min-h-screen">
        <LegBuilderContainer />
      </div>
    </Layout>
  );
}
