import { useState } from "react";
// PLUGINS
import Link from "next/link";
import { signOut } from "next-auth/react";
// STYLES
import Styles from "./styles.css";
import AccountMenu from "~/components/Navbar/AccountMenu";
// THEME VARIABLES
import { colors } from "~/theme/variables";
// TYPES
import type { user as User } from "@prisma/client";
import type { TAccountMenu } from "~/components/Navbar/Dropdowns/data";

interface Props extends React.ComponentProps<"div"> {
  user: User;
  menu: TAccountMenu;
}

const DropdownAccountMenu = ({ user, menu }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Styles.Dropdown onMouseOut={() => setShow(false)} onMouseOver={() => setShow(true)}>
      <Styles.DropdownTrigger>
        <Styles.ProfilePicture image={user?.image} showCalloutArrow={show} />
        <Styles.Caret role="presentation" />
      </Styles.DropdownTrigger>

      {show && (
        <Styles.DropdownContainer tabIndex={-1}>
          <AccountMenu>
            <AccountMenu.List>
              <AccountMenu.Item>
                <Link href="/profile">
                  <Styles.ProfilePicture image={user?.image} />
                  <Styles.ProfileName title={user?.name as string}>{user?.name}</Styles.ProfileName>
                </Link>
              </AccountMenu.Item>
            </AccountMenu.List>

            <AccountMenu.List>
              {menu.map(({ id, href, text, icon: Icon }) => (
                <AccountMenu.Item key={id}>
                  <Link href={href}>
                    <Icon
                      className="pointer-events-none"
                      css={{ margin: "0 3px 0 5px" }}
                      fill={colors.gray_70}
                      height={24}
                      width={24}
                    />
                    <span>{text}</span>
                  </Link>
                </AccountMenu.Item>
              ))}
            </AccountMenu.List>

            <AccountMenu.List>
              <AccountMenu.Item>
                <button css={{ width: "100%" }} type="button" onClick={() => signOut()}>
                  Sign out of Netflix
                </button>
              </AccountMenu.Item>
            </AccountMenu.List>
          </AccountMenu>
        </Styles.DropdownContainer>
      )}
    </Styles.Dropdown>
  );
};

export default DropdownAccountMenu;
