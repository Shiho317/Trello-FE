import axios from "axios";
import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import { FormWrapper, LoginForm, LoginWrapper } from "./Login.style";

const Login = () => {
  const { myStorage, setLoggedIn } = useContext(AppContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate()

  const loginAccount = async (e) => {
    e.preventDefault();

    const currUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const result = await axios.post(
        "/api/user/login",
        currUser
      );
      const userData = {
        name: result.data.name,
        email: result.data.email,
        color: result.data.color,
        id: result.data.id,
      };
      myStorage.setItem("user", JSON.stringify(userData));
      alert("You have successfully logged in.")
      setLoggedIn(true)
      setTimeout(() => {
        navigate("/workspace")
      }, 500);
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <LoginWrapper>
      <FormWrapper>
        <h1>Login</h1>
        <LoginForm onSubmit={loginAccount}>
          <input type="email" name="email" placeholder="Email" ref={emailRef} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <button type="submit">Log in</button>
        </LoginForm>
        <Link to="/signup">
          <p>You don't have account? Here.</p>
        </Link>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Login;
