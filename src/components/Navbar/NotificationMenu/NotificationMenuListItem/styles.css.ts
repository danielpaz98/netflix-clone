import styled from "@emotion/styled";
// PLUGINS
import Link from "next/link";

const Styles = {
  ListItem: styled.li`
    position: relative;
    line-height: 1;
  `,
  LinkItem: styled(Link)`
    display: flex;
    color: ${({ theme }) => theme.colors.gray_80};
    background-color: rgba(0, 0, 0, 0.85);

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: #000;
    }
  `,
  ImageContainer: styled.picture`
    position: relative;
    display: block;
    padding: 1rem;
    flex-grow: 0;

    & img {
      width: 112px;
      object-fit: cover;
      object-position: center;
      border-radius: 4px;
    }
  `,
  DescriptionContainer: styled.div`
    max-width: 264px;
    padding: 1rem;
    font-size: 1rem;
    padding-left: 0;
    flex-grow: 1;
  `,
  Text: styled.p`
    line-height: 1.2;
  `,
  RelativeTime: styled.time`
    color: gray;
    font-size: 0.75rem;
    line-height: 1.3;
    margin-top: 0.1875rem;
  `,
};

export default Styles;
