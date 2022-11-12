import Layout from "../components/Layout.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <Layout>
      <>
        <p>
          Información sobre mi y algunos de mis ultimos posts
        </p>
        <Counter start={2} />
      </>
    </Layout>
  );
}
