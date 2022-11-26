import styled from "styled-components";

export const ListWrapper = styled.div`
  background: ${(props) => props.theme.color.lightgrey};
  width: 17rem;
  border-radius: 5px;
  padding: 0.3rem;

  @media ${(props) => props.theme.device.laptop} {
    width: 17rem;
  }
`;

export const CardTitle = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h4 {
    padding-left: 0.5rem;
    font-size: 0.8rem;
    color: black;
  }
`;

export const AddCard = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  padding: 0 0.5rem;
  gap: 0.2rem;
  color: ${(props) => props.theme.color.deepgrey};

  &:hover {
    background: ${(props) => props.theme.color.grey};
    color: black;
  }

  & p {
    font-size: 0.8rem;
  }
`;

export const CardOption = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &:hover {
    background: ${(props) => props.theme.color.grey};
  }

  & .option-btn {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const CardSetting = styled.div`
  width: 10rem;
  position: absolute;
  top: 2.2rem;
  right: 0;
  background: white;
  border-radius: 2px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);

  @media ${(props) => props.theme.device.laptop} {
    width: 20rem;
    left: 0;
  }

  & ul {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
  }

  & li {
    line-height: 1.5rem;
    font-size: 0.8rem;
    list-style: none;
    padding: 0.5rem 1rem;

    &:hover {
      background: ${(props) => props.theme.color.grey};
    }
  }
`;

export const SettingTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.color.grey};
  width: 90%;
  height: 3rem;
  margin: 0 auto;

  & p {
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.deepgrey};
  }

  & button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0rem;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.color.deepgrey};
  }
`;

export const TodosWrapper = styled.div`
  width: 15rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media ${(props) => props.theme.device.laptop} {
    width: 100%;
  }
`;

export const RenameForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & input {
    width: 10rem;
    height: 2rem;
    border: none;
    padding: 0 0.5rem;
  }

  & button {
    padding: 0.5rem;
    background: ${(props) => props.theme.color.black};
    border: none;
    color: ${(props) => props.theme.color.white};
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
