import _ProviderList from "./ProviderList";
import ProviderListItem from "./ProviderListItem";

const ProviderList = Object.assign(_ProviderList, {
  Item: ProviderListItem,
});

export * from "./ProviderList";
export default ProviderList;
