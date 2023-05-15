import { useState } from "react";
// STYLES
import Styles from "./styles.css";
// COMPONENTS
import NotificationMenu from "~/components/Navbar/NotificationMenu";
// ICONS
import BellIcon from "~/icons/bell.svg";
// TYPES
import type { TNotificationMenu } from "~/components/Navbar/Dropdowns/data";

type Props = {
  className?: string;
  menu: TNotificationMenu;
};

const notifications = 1;

const DropdownNotificationMenu = ({ className, menu }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Styles.Dropdown
      className={className}
      onMouseOut={() => setShow(false)}
      onMouseOver={() => setShow(true)}>
      <Styles.DropdownTrigger showCalloutArrow={show} type="button">
        <BellIcon />
        {notifications > 0 && <Styles.NotificationPill>{notifications}</Styles.NotificationPill>}
      </Styles.DropdownTrigger>

      {show && (
        <Styles.DropdownContainer tabIndex={-1}>
          <NotificationMenu>
            <NotificationMenu.List>
              {menu.map(({ id, image, title, href, text, time }) => (
                <NotificationMenu.Item
                  key={id}
                  href={href}
                  image={image}
                  text={text}
                  time={time}
                  title={title}
                />
              ))}
            </NotificationMenu.List>
          </NotificationMenu>
        </Styles.DropdownContainer>
      )}
    </Styles.Dropdown>
  );
};

export default DropdownNotificationMenu;
