import { useState } from "react";
// PLUGINS
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
// STYLES
import Styles from "./styles.css";
// COMPONENTS
import MobileNavbarMenu from "~/components/Navbar/MobileNavbarMenu";
// TYPES
import type { TNavMenu } from "~/components/Navbar/Dropdowns/data";

type Props = {
  className?: string;
  menu: TNavMenu;
};

const DropdownMobileMenu = ({ className, menu }: Props) => {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);

  return (
    <Styles.Dropdown
      className={className}
      onMouseOut={() => setShow(false)}
      onMouseOver={() => setShow(true)}>
      <Styles.DropdownTrigger type="button">Browse</Styles.DropdownTrigger>

      {show && (
        <Styles.DropdownContainer tabIndex={-1}>
          <MobileNavbarMenu>
            <MobileNavbarMenu.List>
              {menu.map((item) => (
                <MobileNavbarMenu.Item
                  key={item.id}
                  className={clsx({ active: router.pathname === item.href })}>
                  <Link href={item.href}>{item.text}</Link>
                </MobileNavbarMenu.Item>
              ))}
            </MobileNavbarMenu.List>
          </MobileNavbarMenu>
        </Styles.DropdownContainer>
      )}
    </Styles.Dropdown>
  );
};

export default DropdownMobileMenu;
