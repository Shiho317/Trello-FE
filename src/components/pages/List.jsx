import React, { useState } from "react";
import {
  AddCard,
  CardOption,
  CardSetting,
  CardTitle,
  ListWrapper,
  RenameForm,
  SettingTitle,
  TodosWrapper,
} from "./List.style";
import { MdOutlineAdd, MdClose } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import NewCard from "./NewCard";
import Todos from "./Todos";
import axios from "axios";
import { Droppable } from "react-beautiful-dnd";

const List = ({ list, loadLists }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const onClickSetting = () => {
    setModalOpen((prev) => !prev);
    setIsRenameModal(false);
  };

  const [addNewCard, setAddNewCard] = useState(false);

  const deleteList = async () => {
    const deletedList = {
      id: list._id,
    };

    try {
      await axios
        .post("https://trello-be.onrender.com/api/list/deletelist", deletedList)
        .then((result) => {
          loadLists();
          setModalOpen(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [isRenameModal, setIsRenameModal] = useState(false);
  const [isListTitle, setIsListTitle] = useState(list.title);

  const renameModalToggle = () => {
    setIsRenameModal((prev) => !prev);
  };

  const renameList = async (e) => {
    e.preventDefault();

    const renamedList = {
      id: list._id,
      title: isListTitle,
    };

    try {
      await axios
        .post("https://trello-be.onrender.com/api/list/renamelist", renamedList)
        .then((result) => {
          setIsRenameModal((prev) => !prev);
          setModalOpen(false);
          loadLists();
        });
    } catch (error) {}
  };

  return (
    <ListWrapper>
      <CardTitle>
        {isRenameModal ? (
          <RenameForm onSubmit={renameList}>
            <input
              type="text"
              value={isListTitle}
              onChange={(e) => setIsListTitle(e.target.value)}
              required
            />
            <button type="submit">Rename</button>
          </RenameForm>
        ) : (
          <h4>{list.title}</h4>
        )}
        <CardOption>
          <button className="option-btn" onClick={() => onClickSetting()}>
            <BiDotsHorizontalRounded />
          </button>
          {modalOpen && (
            <CardSetting>
              <SettingTitle>
                <p>List options</p>
                <button onClick={() => onClickSetting()}>
                  <MdClose />
                </button>
              </SettingTitle>
              <ul>
                <li onClick={() => renameModalToggle()}>Rename</li>
                <li onClick={() => deleteList()}>Delete</li>
              </ul>
            </CardSetting>
          )}
        </CardOption>
      </CardTitle>
      <Droppable droppableId={list.title}>
        {(provided) => (
          <TodosWrapper {...provided.droppableProps} ref={provided.innerRef}>
            {list.todos.map((item, index) => (
              <Todos
                key={index}
                list={list}
                todo={item}
                index={index}
                loadLists={loadLists}
              />
            ))}
            {provided.placeholder}
          </TodosWrapper>
        )}
      </Droppable>
      {addNewCard ? (
        <NewCard
          list={list}
          setAddNewCard={setAddNewCard}
          loadLists={loadLists}
        />
      ) : (
        <AddCard onClick={() => setAddNewCard(true)}>
          <MdOutlineAdd />
          <p>Add a card</p>
        </AddCard>
      )}
    </ListWrapper>
  );
};

export default List;
