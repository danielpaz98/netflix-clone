// STYLES
import Styles from "./styles";

export type Props = {
  className?: string;
  children?: React.ReactNode;
};

const ProviderList = ({ className, children }: Props) => {
  return <Styles.ProviderList className={className}>{children}</Styles.ProviderList>;
};

export default ProviderList;
