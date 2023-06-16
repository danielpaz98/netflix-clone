import { useState } from "react";
// STYLES
import Styles from "./styles.css";
// COMPONENTS
import MemberLinks from "./MemberLinks";
import SocialLinks from "./SocialLinks";
// DATA
import { memberLinks, socialLinks } from "./data";

const Footer = () => {
  const [showCode, setShowCode] = useState<boolean>(false);

  return (
    <Styles.Footer>
      <SocialLinks>
        {socialLinks.map(({ id, href, icon: Icon }) => (
          <SocialLinks.Item key={id} href={href}>
            <Icon />
          </SocialLinks.Item>
        ))}
      </SocialLinks>

      <MemberLinks>
        {memberLinks.map(({ id, href, text }) => (
          <MemberLinks.Item key={id} href={href}>
            {text}
          </MemberLinks.Item>
        ))}
      </MemberLinks>

      <Styles.MemberService>
        <Styles.MemberServiceCode type="button" onClick={() => setShowCode(true)}>
          {showCode ? "711-322" : "Service Code"}
        </Styles.MemberServiceCode>
      </Styles.MemberService>

      <Styles.MemberCopyright>
        <span>© 1997-{new Date().getFullYear()} Netflix, Inc.</span>
      </Styles.MemberCopyright>
    </Styles.Footer>
  );
};

export default Footer;
