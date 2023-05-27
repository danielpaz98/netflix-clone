// LAYOUTS
import { DefaultLayout } from "~/layouts";
// LIBRARIES
import { withAuth } from "~/lib";
// COMPONENTS
import Billboard from "~/components/Billboard";
// SERVICES
import { getBillboard } from "~/services";
// TYPES
import type { Movie, User } from "@prisma/client";

type Props = {
  user: User;
  billboard: Movie;
};

const HomePage: NextPageWithLayout<Props> = ({ billboard }) => {
  return (
    <>
      <Billboard billboard={billboard} />
      <h1>asodokasdkoas</h1>
    </>
  );
};

export const getServerSideProps = withAuth(async ({ req }, session) => {
  const billboard = await getBillboard(req);

  return {
    props: {
      user: session?.user,
      billboard,
    },
  };
});

HomePage.title = "Home - Netflix";
HomePage.layout = DefaultLayout;

export default HomePage;
