// STYLES
import Styles from "./styles.css";
// COMPONENTS
import Navbar from "~/components/Navbar";
// TYPES
import type { user as User } from "@prisma/client";

type Props = {
  children: React.ReactNode;
  user: User;
};

export const DefaultLayout = ({ user, children }: Props) => {
  return (
    <Styles.Container>
      <Navbar user={user} />

      <main>{children}</main>
    </Styles.Container>
  );
};

const Layout = (page: React.ReactElement) => <DefaultLayout {...page.props}>{page}</DefaultLayout>;

export default Layout;
