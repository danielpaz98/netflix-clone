// PLUGINS
import Image from "next/image";
// STYLES
import Styles from "./styles.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Styles.Container>
      <Styles.Picture>
        <Image
          fill
          alt=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/12d2e878-44d1-42ae-b9a7-4ae460b2ca53/CO-es-20230417-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          style={{ objectPosition: "center", objectFit: "cover" }}
        />
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
