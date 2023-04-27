// PLUGINS
import Image from "next/image";
// STYLES
import Styles from "./styles.css";
// IMAGES
import DefaultImage from "~/images/png/default-blue.png";

type Props = {
  className?: string;
  image?: string | null | StaticImageData;
  username: string | null | undefined;
};

const ProfilePicture = ({ className, image, username }: Props) => {
  return (
    <Styles.Figure className={className}>
      <Styles.Picture>
        <Image
          fill
          priority
          alt={username as string}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={image || DefaultImage}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </Styles.Picture>

      <Styles.Text>{username}</Styles.Text>
    </Styles.Figure>
  );
};
export default ProfilePicture;
