// LIBRARIES
import { withAuth } from "~/lib";
// STYLES
import Styles from "./styles.css";
// IMAGES
import ProfilePicture from "~/components/ProfilePicture";
// TYPES
import type { User } from "@prisma/client";

type Props = {
  user: User;
};

const ProfilePage: NextPageWithLayout<Props> = ({ user }) => {
  return (
    <>
      <Styles.ShadedGradient />

      <Styles.Main>
        <Styles.Container>
          <Styles.ProfilesContainer>
            <Styles.Title>Who&apos;s watching?</Styles.Title>

            <Styles.Link href="/">
              <ProfilePicture image={user.image} username={user.name} />
            </Styles.Link>
          </Styles.ProfilesContainer>
        </Styles.Container>
      </Styles.Main>
    </>
  );
};

export const getServerSideProps = withAuth((_, session) => {
  return {
    props: {
      user: session?.user,
    },
  };
});

ProfilePage.title = "Profile - Netflix";

export default ProfilePage;
