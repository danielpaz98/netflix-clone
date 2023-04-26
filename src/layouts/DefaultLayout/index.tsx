// STYLES
import Styles from "./styles.css";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Styles.Container>
      <Styles.Main>{children}</Styles.Main>
    </Styles.Container>
  );
};

const Layout = (page: React.ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Layout;
