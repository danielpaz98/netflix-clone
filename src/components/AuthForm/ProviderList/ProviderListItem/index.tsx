// STYLES
import Styles from "./styles.css";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const ProviderListItem = ({ className, children, ...restProps }: Props) => {
  return (
    <Styles.ProviderListItem className={className}>
      <button type="button" {...restProps}>
        {children}
      </button>
    </Styles.ProviderListItem>
  );
};

export default ProviderListItem;
