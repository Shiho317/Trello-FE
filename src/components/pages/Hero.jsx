import axios from "axios";
import React, { useEffect, useState } from "react";
import { AddList, HeroWrapper } from "./Hero.style";
import List from "./List";
import { MdOutlineAdd } from "react-icons/md";
import AddNewList from "./AddNewList";
import { DragDropContext } from "react-beautiful-dnd";

const Hero = () => {
  const [todolists, setTodolists] = useState([]);

  const loadLists = async () => {
    try {
      await axios
        .get("https://trello-be.onrender.com/api/list/todolists")
        .then((result) => {
          setTodolists(result.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadLists();
  }, []);

  const [addNewList, setAddNewList] = useState(false);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;

    const findSource = todolists.find(
      (list) => list.title === source.droppableId
    );
    if (findSource) {
      add = findSource.todos[source.index];
      findSource.todos.splice(source.index, 1);

      const sourceTodos = {
        id: findSource._id,
        todos: findSource.todos,
      };

      try {
        axios.post("https://trello-be.onrender.com/api/list/todolists", sourceTodos);
      } catch (error) {
        console.log(error);
      }
    }

    const findDestination = todolists.find(
      (list) => list.title === destination.droppableId
    );
    if (findDestination) {
      findDestination.todos.splice(destination.index, 0, add);

      const destinationTodos = {
        id: findDestination._id,
        todos: findDestination.todos,
      };

      try {
        axios
          .post("https://trello-be.onrender.com/api/list/todolists", destinationTodos)
          .then((result) => {
            loadLists();
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <HeroWrapper>
        {todolists.map((list) => (
          <List key={list._id} list={list} loadLists={loadLists} />
        ))}
        {addNewList ? (
          <AddNewList setAddNewList={setAddNewList} loadLists={loadLists} />
        ) : (
          <AddList onClick={() => setAddNewList(true)}>
            <MdOutlineAdd />
            <h4>Add another list</h4>
          </AddList>
        )}
      </HeroWrapper>
    </DragDropContext>
  );
};

export default Hero;
