// LAYOUTS
import { DefaultLayout } from "~/layouts";

const HomePage: NextPageWithLayout = () => {
  return <h1>Netflix Clone</h1>;
};

HomePage.title = "Inicio";
HomePage.layout = DefaultLayout;

export default HomePage;
