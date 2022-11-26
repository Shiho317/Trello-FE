import styled from "styled-components";

export const NewListWrapper = styled.form`
  width: 17rem;
  background: ${(props) => props.theme.color.lightgrey};
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  & input{
    padding: 0 0.5rem;
    width: 100%;
    height: 2rem;
  }
`;

export const AddListButtons = styled.div`
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
background: ${(props) => props.theme.color.black};
color: ${(props) => props.theme.color.white};
}

& .cancel-btn{
width: 5rem;
height: 2rem;
border: none;
border-radius: 5px;
cursor: pointer;
background: ${(props) => props.theme.color.grey};
color: black;
display: flex;
align-items: center;
justify-content: center;

& p{
  font-size: 0.8rem;
}
`;
