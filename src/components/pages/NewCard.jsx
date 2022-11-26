import axios from "axios";
import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { FormButtons, NewCardWrapper } from "./NewCard.style";
import { v4 as uuidv4 } from "uuid";

const NewCard = ({ setAddNewCard, list, loadLists }) => {
  const { userInfo } = useContext(AppContext);

  const [cardValue, setCardValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const currUser = JSON.parse(userInfo);

  const addTodos = async (e) => {
    e.preventDefault();

    const newTodo = {
      id: list._id,
      todos: [
        ...list.todos,
        {
          id: uuidv4(),
          todo: cardValue,
          due: dateValue,
          user: currUser.name,
          color: currUser.color
        },
      ],
    };
    try {
      await axios
        .post("/api/list/todolists", newTodo)
        .then((result) => {
          console.log(result.status);
          loadLists();
          setAddNewCard(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NewCardWrapper onSubmit={addTodos}>
      <textarea
        placeholder="your new card here"
        rows={5}
        onChange={(e) => setCardValue(e.target.value)}
        value={cardValue}
        required
      />
      <input
        type="date"
        placeholder="due date"
        value={dateValue}
        onChange={(e) => setDateValue(e.target.value)}
      />
      <p className="user" style={{backgroundColor: currUser.color}}>{currUser.name}</p>
      <FormButtons>
        <button type="submit" className="submit-btn">
          Create
        </button>
        <div className="cancel-btn" onClick={() => setAddNewCard(false)}>
          <p>Cancel</p>
        </div>
      </FormButtons>
    </NewCardWrapper>
  );
};

export default NewCard;
