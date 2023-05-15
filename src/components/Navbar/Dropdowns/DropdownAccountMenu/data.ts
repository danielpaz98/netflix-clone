// ICONS
import PenIcon from "~/icons/pen.svg";
import TransferIcon from "~/icons/transfer.svg";
import AccountIcon from "~/icons/account.svg";
import CircleQuestionIcon from "~/icons/circle-question.svg";

export const accountMenu = [
  { id: 1, href: "#profiles/manage", text: "Manage Profiles", icon: PenIcon },
  { id: 2, href: "#profile/transfer", text: "Transfer Profile", icon: TransferIcon },
  { id: 3, href: "#your-account", text: "Account", icon: AccountIcon },
  { id: 4, href: "#help", text: "Help Center", icon: CircleQuestionIcon },
];

export type TAccountMenu = typeof accountMenu;
