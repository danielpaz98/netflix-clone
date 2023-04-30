// STYLES
import Styles from "./styles";

export type FeedbackType = "success" | "warning" | "error";

export type Props = {
  className?: string;
  feedbackType?: FeedbackType;
  text: string;
};

const FeedbackMessage = ({ className, feedbackType, text }: Props) => {
  return (
    <Styles.Container className={className} feedbackType={feedbackType}>
      <p>{text}</p>
    </Styles.Container>
  );
};

export default FeedbackMessage;
