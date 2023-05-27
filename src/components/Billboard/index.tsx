// STYLES
import Styles from "./styles.css";
// COMPONENTS
import Button from "~/components/Button";
import PlayButton from "~/components/PlayButton";
// ICONS
import CircleInfoIcon from "~/icons/circle-info.svg";
// TYPES
import type { Movie } from "@prisma/client";

type Props = {
  billboard: Movie;
};

const Billboard = ({ billboard }: Props) => {
  return (
    <Styles.Billboard>
      <Styles.BillboardVideo autoPlay loop muted poster={billboard?.thumbnailUrl} src={billboard?.videoUrl} />

      <Styles.BillboardContainer>
        <Styles.BillboardContent>
          <Styles.BillboardTitle>{billboard.title}</Styles.BillboardTitle>
          <Styles.BillboardDescription>{billboard.description}</Styles.BillboardDescription>
          <Styles.BillboardLinks>
            <PlayButton color="primary">Play</PlayButton>
            <Button color="secondary" startIcon={<CircleInfoIcon />}>
              More Info
            </Button>
          </Styles.BillboardLinks>
        </Styles.BillboardContent>
      </Styles.BillboardContainer>
    </Styles.Billboard>
  );
};

export default Billboard;
