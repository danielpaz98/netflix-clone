import { signOut } from "next-auth/react";
// LAYOUTS
import { DefaultLayout } from "~/layouts";
// LIBRARIES
import { withAuth } from "~/lib";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <h1>Netflix Clone</h1>
      <button type="button" onClick={() => signOut()}>
        Logout
      </button>
    </>
  );
};

export const getServerSideProps = withAuth(() => {
  return {
    props: {},
  };
});

HomePage.title = "Inicio";
HomePage.layout = DefaultLayout;

export default HomePage;
