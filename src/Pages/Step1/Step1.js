// Third-party imports
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

// Global imports
import MainContainer from "../../components/MainContainer/MainContainer";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Step1 = () => {
  // Hooks
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    history.push("./step2");
  };

  return (
    <MainContainer>
      <h2>Step 2</h2>
      <form>
        <input
          //   ref={register}
          name="firstName"
          type="text"
          placeholder="First Name"
        />
        <input
          //   ref={register}
          name="LastName"
          type="text"
          placeholder="Last Name"
        />
        <button type="submit">Next</button>
      </form>
    </MainContainer>
  );
};

export default Step1;
