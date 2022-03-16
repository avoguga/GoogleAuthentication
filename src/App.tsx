import { Layout } from "./styles/Layout";

import Content from "./components/Content";
import MainHeader from "./components/MainHeader";

function App() {

  return (
    <Layout>
      <MainHeader />
      <Content />
    </Layout>
  );
}

export default App;
