import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { TodoDue, TodoUser, TodoWrapper } from "./Todos.style";
import { Draggable } from "react-beautiful-dnd";
import axios from "axios";

const Todos = ({ list, todo, index, loadLists }) => {
  const userLogo = todo.user.split("")[0].toUpperCase();

  const deleteTodo = async () => {
    const filtered = list.todos.filter((item) => item.id !== todo.id);

    const deletedTodo = {
      id: list._id,
      todos: filtered,
    };

    try {
      await axios
        .post("/api/list/todolists", deletedTodo)
        .then((result) => {
          loadLists();
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <TodoWrapper
          ref={provided.innerRef}
          snapshot={snapshot}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p>{todo.todo}</p>
          <TodoDue>
            <AiOutlineClockCircle />
            <p>{todo.due}</p>
          </TodoDue>
          <TodoUser>
            <p style={{backgroundColor: todo.color}}>{userLogo}</p>
          </TodoUser>
          <button onClick={() => deleteTodo()}>
            <MdClose />
          </button>
        </TodoWrapper>
      )}
    </Draggable>
  );
};

export default Todos;
