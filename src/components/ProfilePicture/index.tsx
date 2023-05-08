// PLUGINS
import Image from "next/image";
// STYLES
import Styles from "./styles.css";
// IMAGES
import DefaultImage from "~/images/png/default-blue.png";

interface Props extends React.ComponentProps<"figure"> {
  className?: string;
  image: string | null | undefined | StaticImageData;
  username?: string | null | undefined;
}

const ProfilePicture = ({ className, image, username, ...restProps }: Props) => {
  return (
    <Styles.Figure className={className} {...restProps}>
      <Styles.Picture>
        <Image
          fill
          priority
          alt={(username as string) || ""}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={image || DefaultImage}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </Styles.Picture>

      {username && <Styles.Text>{username}</Styles.Text>}
    </Styles.Figure>
  );
};

export default ProfilePicture;
