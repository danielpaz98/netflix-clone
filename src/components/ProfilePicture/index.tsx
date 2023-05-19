// PLUGINS
import Image from "next/image";
// STYLES
import Styles from "./styles.css";

interface Props extends React.ComponentProps<"figure"> {
  className?: string;
  image: string | null | undefined | StaticImageData;
  username?: string | null | undefined;
}

const ProfilePicture = ({ className, image, username, ...restProps }: Props) => {
  return (
    <Styles.Figure {...restProps} className={className}>
      <Styles.Picture onlyPicture={Boolean(username)}>
        {image && (
          <Image
            fill
            priority
            alt={(username as string) || ""}
            css={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            src={image}
          />
        )}
      </Styles.Picture>

      {username && <Styles.Text>{username}</Styles.Text>}
    </Styles.Figure>
  );
};

export default ProfilePicture;
