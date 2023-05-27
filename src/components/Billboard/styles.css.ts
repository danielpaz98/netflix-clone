import styled from "@emotion/styled";
// VARIABLES
import { headerHeight } from "~/components/Navbar/styles.css";

const Styles = {
  Billboard: styled.div`
    position: relative;
    height: 56.25vw;
    margin-top: ${`-${headerHeight}`};
    z-index: 0;
  `,
  BillboardVideo: styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
  `,
  BillboardContainer: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: ${headerHeight} 4%;
  `,
  BillboardContent: styled.div`
    position: absolute;
    top: 30%;
    width: 36%;
    z-index: 10;
  `,
  BillboardTitle: styled.h1`
    display: block;
  `,
  BillboardDescription: styled.p`
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  `,
  BillboardLinks: styled.div`
    position: relative;
    display: flex;
    gap: 0.625rem;
    line-height: 88%;
    margin-top: 1.5vw;
    white-space: nowrap;
    z-index: 10;
  `,
};

export default Styles;
