import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 5rem;
  background: ${(props) => props.theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.white};
  font-size: 0.5rem;
`;
