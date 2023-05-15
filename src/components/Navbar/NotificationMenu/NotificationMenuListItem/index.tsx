// STYLES
import Styles from "./styles.css";
// PLUGINS
import Image from "next/image";

interface Props extends React.ComponentProps<"a"> {
  href: string;
  image: string | StaticImageData;
  text: string;
  title: string;
  time: string;
}

const NotificationMenuListItem = ({ className, href, image, text, title, time }: Props) => {
  return (
    <Styles.ListItem>
      <Styles.LinkItem className={className} href={href}>
        <Styles.ImageContainer>
          <Image alt={text} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src={image} />
        </Styles.ImageContainer>

        <Styles.DescriptionContainer>
          <Styles.Text>{title}</Styles.Text>
          <Styles.Text>{text}</Styles.Text>
          <Styles.RelativeTime>{time}</Styles.RelativeTime>
        </Styles.DescriptionContainer>
      </Styles.LinkItem>
    </Styles.ListItem>
  );
};

export default NotificationMenuListItem;
