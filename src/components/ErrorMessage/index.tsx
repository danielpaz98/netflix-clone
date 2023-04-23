// STYLES
import Styles from "./styles";

type Props = {
  className?: string;
  text: string;
};

const ErroMessage = ({ className, text }: Props) => {
  return (
    <Styles.Container className={className}>
      <p>{text}</p>
    </Styles.Container>
  );
};

export default ErroMessage;
