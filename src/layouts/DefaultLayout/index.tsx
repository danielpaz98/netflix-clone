// STYLES
import Styles from "./styles.css";
// COMPONENTS
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
// TYPES
import type { User } from "@prisma/client";

type Props = {
  children: React.ReactNode;
  user: User;
};

export const DefaultLayout = ({ user, children }: Props) => {
  return (
    <Styles.Container>
      <Navbar user={user} />
      <main>{children}</main>
      <Footer />
    </Styles.Container>
  );
};

const Layout = (page: React.ReactElement) => <DefaultLayout {...page.props}>{page}</DefaultLayout>;

export default Layout;
