// PLUGINS
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
// STYLES
import Styles from "./styles.css";
// COMPONENTS
import NavbarMenu from "~/components/Navbar/NavbarMenu";
import ExpandableSearchBar from "~/components/Navbar/ExpandableSearchBar";
import {
  DropdownMobileMenu,
  DropdownNotificationsMenu,
  DropdownAccountMenu,
} from "~/components/Navbar/Dropdowns";
// HOOKS
import { useScrollPosition } from "~/hooks";
// FAKE DATA
import { navMenu, notificationMenu, accountMenu } from "./Dropdowns/data";
// TYPES
import type { User } from "@prisma/client";

type Props = {
  user: User;
};

const Navbar = ({ user }: Props) => {
  const router = useRouter();
  const { y } = useScrollPosition();

  return (
    <Styles.Header scrollY={y}>
      <Styles.Nav>
        <Styles.HeaderLink href="/">
          <Styles.HeaderLogo className="pointer-events-none" />
        </Styles.HeaderLink>

        <Styles.NavContainer>
          <NavbarMenu css={Styles.NavbarMenu}>
            <NavbarMenu.Item>
              <DropdownMobileMenu menu={navMenu} />
            </NavbarMenu.Item>

            {navMenu.map((menu) => (
              <NavbarMenu.Item key={menu.id} className={clsx({ active: router.pathname === menu.href })}>
                <Link href={menu.href}>{menu.text}</Link>
              </NavbarMenu.Item>
            ))}
          </NavbarMenu>

          <NavbarMenu>
            <NavbarMenu.Item css={Styles.SearchItem}>
              <ExpandableSearchBar placeholder="Titles, peoples, genres" />
            </NavbarMenu.Item>

            <NavbarMenu.Item className={clsx({ active: router.pathname === "#kids" })} css={Styles.KidsItem}>
              <Link href="#kids">Kids</Link>
            </NavbarMenu.Item>

            <NavbarMenu.Item>
              <DropdownNotificationsMenu menu={notificationMenu} />
            </NavbarMenu.Item>

            <NavbarMenu.Item>
              <DropdownAccountMenu menu={accountMenu} user={user} />
            </NavbarMenu.Item>
          </NavbarMenu>
        </Styles.NavContainer>
      </Styles.Nav>
    </Styles.Header>
  );
};

export default Navbar;
