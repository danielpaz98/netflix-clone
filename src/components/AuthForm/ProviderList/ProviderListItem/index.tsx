// STYLES
import Styles from "./styles.css";

type Props = React.ComponentProps<"button">;

const ProviderListItem = ({ className, children, ...restProps }: Props) => {
  return (
    <Styles.ProviderListItem className={className}>
      <button {...restProps} type="button">
        {children}
      </button>
    </Styles.ProviderListItem>
  );
};

export default ProviderListItem;
