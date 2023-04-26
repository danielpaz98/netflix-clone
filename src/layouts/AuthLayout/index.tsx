// PLUGINS
import Image from "next/image";
// STYLES
import Styles from "./styles.css";
// IMAGES
import BackgroundImage from "~/images/jpg/hero.jpg";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Styles.Container>
      <Styles.Picture>
        <Image alt="" src={BackgroundImage} />
      </Styles.Picture>

      <Styles.Header>
        <Styles.HeaderLink href="/">
          <Styles.HeaderLogo />
        </Styles.HeaderLink>
      </Styles.Header>

      <Styles.Main>{children}</Styles.Main>
    </Styles.Container>
  );
};

export const Layout = (page: React.ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Layout;
