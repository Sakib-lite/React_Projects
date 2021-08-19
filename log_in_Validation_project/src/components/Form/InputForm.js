import React, { Fragment, useState, useEffect } from "react";
import Button from "./Button";
import styles from "./InputForm.module.css";


const InputForm = (props) => {
  const [enteredUsername, setUsername] = useState('');

  const [enteredPassword, setPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  
  
  useEffect(() => {
    const timer=setTimeout(() => {
         console.log('checking validity')
     setIsFormValid(enteredUsername.length>4 && enteredPassword.length>6 )
    }, 500);
return ()=>{
     clearTimeout(timer)
}

  }, [enteredUsername, enteredPassword]);

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (enteredUsername.length > 4) {
      setIsFormValid(true);
    } 

    if (enteredPassword.length > 6) {
      setIsFormValid(true);
    } 
const data = {
  username:enteredUsername,
  password:enteredPassword
}
    props.onReceiveData(data );

    
  };

  return (
    <Fragment>
      <form className={styles.form} onSubmit={submitFormHandler}>
        <div className={styles.control}>
          <label>Username:</label>
          <input
            type="text/number"
            onChange={usernameChangeHandler}
            className={`${!isFormValid ? styles.invalid : ""}`}
          />
        </div>

        <div className={styles.control}>
          <label>Password:</label>
          <input
            type="text"
            onChange={passwordChangeHandler}
            className={`${!isFormValid ? styles.invalid : ""}`}
          />
        </div>
 
        <Button type="submit" disabled={!isFormValid} > Log In</Button>
      </form>
    </Fragment>
  );
};

export default InputForm;
