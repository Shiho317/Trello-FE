import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  padding: 1rem;
  background: ${(props) => props.theme.color.black};
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${props => props.theme.device.tablet} {
    width: 30rem;
  }

  & h1 {
    color: ${(props) => props.theme.color.white};
    position: absolute;
    top: 1rem;
    left: 2rem;
  }

  & a {
    width: 100%;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    text-decoration: underline;
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.color.white};
    font-size: 0.8rem;

    & p{
      text-align: center;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  & input {
    width: 90%;
    height: 2rem;
    border: none;
    outline: none;
    background: white;
    border-radius: 5px;
    padding: 0 0.5rem;
  }

  & button {
    border: none;
    background: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.black};
    width: 10rem;
    height: 2.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      transition: all 0.3s ease;
      opacity: 0.8;
    }
  }
`;
