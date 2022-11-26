import axios from "axios";
import React, { useState } from "react";
import { AddListButtons, NewListWrapper } from "./AddNewList.style";

const AddNewList = ({ setAddNewList, loadLists }) => {

  const [ listTitle, setListTitle ] = useState('')

  const submitNewList = async(e) => {
    e.preventDefault()

    const newTitle = {
      title: listTitle
    }

    try {
      await axios.post("https://trello-be.onrender.com/api/list/addlist", newTitle)
      .then(result => {
        loadLists()
        setAddNewList(false)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <NewListWrapper onSubmit={submitNewList}>
      <input type="text" placeholder="Enter list title..." value={listTitle} onChange={(e) => setListTitle(e.target.value)} required />
      <AddListButtons>
        <button type="submit" className="submit-btn">
          Add list
        </button>
        <div className="cancel-btn" onClick={() => setAddNewList(false)}>
          <p>Cancel</p>
        </div>
      </AddListButtons>
    </NewListWrapper>
  );
};

export default AddNewList;
