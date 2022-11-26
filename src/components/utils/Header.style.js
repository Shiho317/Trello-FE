import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  background: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
  padding: 0 2rem;

  @media ${(props) => props.theme.device.laptop} {
    height: 5rem;
    display: flex;
    justify-content: space-between;
  }

  & h4 {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  & h3 {
    text-align: center;
    grid-column: 1/4;
    grid-row: 2/3;
  }
`;

export const Icon = styled.div`
  grid-column: 3/4;
  grid-row: 1/2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const UserInitial = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LogoutModal = styled.ul`
  position: absolute;
  top: 40px;
  right: 0;
  background: white;
  width: 10rem;
  height: 3rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);

  & li {
    list-style: none;
    cursor: pointer;

    & p {
      font-size: 0.8rem;
      color: black;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const AccountOption = styled.div`
  grid-column: 3/4;
  grid-row: 1/2;
  display: flex;
  aling-items: center;
  justify-content: center;
  gap: 1rem;

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.color.white};

    &:hover {
      transition: all 0.3s ease;
      opacity: 0.8;
    }
  }
`;
