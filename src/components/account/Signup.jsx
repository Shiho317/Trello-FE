import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupForm, SignupWrapper, SUformWrap } from "./Signup.style";
import axios from "axios";

const Signup = () => {
  const usernameRef = useRef(null);
  const useremailRef = useRef(null);
  const userpasswordRef = useRef(null);

  const navigate = useNavigate();

  const addAccount = async (e) => {
    e.preventDefault();

    const newUser = {
      name: usernameRef.current.value,
      email: useremailRef.current.value,
      password: userpasswordRef.current.value,
    };

    try {
      await axios.post("/api/user/signup", newUser);
      alert("You have successfully created account.");
      setTimeout(() => {
        navigate('/')
      }, 500)
    } catch (error) {
      console.log(error.message);
    }
    usernameRef.current.value = ''
    useremailRef.current.value = ''
    userpasswordRef.current.value = ''
  };

  return (
    <SignupWrapper>
      <SUformWrap>
        <h1>SignUp</h1>
        <SignupForm onSubmit={addAccount}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            ref={usernameRef}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            ref={useremailRef}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={userpasswordRef}
            required
          />
          <button type="submit">Sign up</button>
        </SignupForm>
        <Link to="/">
          <p>Already have an account? Here.</p>
        </Link>
      </SUformWrap>
    </SignupWrapper>
  );
};

export default Signup;
