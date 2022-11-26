import styled from "styled-components";

export const NewCardWrapper = styled.form`
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  & textarea {
    border: none;
    width: 100%;
    outline: none;
    padding: 0.5rem;
  }

  & .user{
    width: 10rem;
    padding: 0.5rem;
    font-size: 0.8rem;
    border-radius: 5px;
  }
`

export const FormButtons = styled.div`
  display: flex;
  gap: 0.5rem;

& button{
  width: 5rem;
  height: 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    opacity: 0.8;
  }
}

& .submit-btn{
  background: ${props => props.theme.color.black};
  color: ${props => props.theme.color.white};
}

& .cancel-btn{
  width: 5rem;
  height: 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${props => props.theme.color.grey};
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  & p{
    font-size: 0.8rem;
  }
}
`