// LAYOUTS
import { DefaultLayout } from "~/layouts";
// LIBRARIES
import { withAuth } from "~/lib";

const HomePage: NextPageWithLayout = () => {
  return <h1 css={{ margin: 0 }}>Netflix Clone</h1>;
};

export const getServerSideProps = withAuth((_, session) => {
  return {
    props: {
      user: session?.user,
    },
  };
});

HomePage.title = "Home - Netflix";
HomePage.layout = DefaultLayout;

export default HomePage;
