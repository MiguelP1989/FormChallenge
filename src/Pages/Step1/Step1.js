// Third-party imports
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

// Global imports
import MainContainer from "../../components/MainContainer/MainContainer";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";

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
      <Form>
        <Input
          {...register("First Name")}
          name="firstName"
          type="text"
          label="First Name"
        />
        <Input
          {...register("Last Name")}
          name="LastName"
          type="text"
          label="Last Name"
        />
        <button type="submit">Next</button>
      </Form>
    </MainContainer>
  );
};

export default Step1;
