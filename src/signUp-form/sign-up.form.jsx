import { useState } from "react";
import { Value } from "sass";

const defaultFormFields = {
  displayName: "",
  email: "",
  passWord: "",
  confirmPassWord: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, passWord, confirmPassWord} = formFields;

  const handleChangeler = (event) => {
const {name} = event;
setFormFields({...formFields, [name]:Value})
  }

  return (
    <div>
      <h1>Sign Up With Your Email and Password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" required name="displayName" value="displayName"/>
        <label>Email</label>
        <input type="email" required name="email" value="email"/>
        <label>Password</label>
        <input type="password" required name="passWord" value="passWord" />
        <label>Confirm Your Password</label>
        <input type="password" required name="confirmPassWord" value="confirmPassWord"/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
