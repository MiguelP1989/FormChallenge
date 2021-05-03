// Third-party imports
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Global imports
import MainContainer from "../../components/MainContainer/MainContainer";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useData } from "../../Context/DataContext";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const scheme = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First Name should not contained numbers!")
    .required("First Name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last Name should not contained numbers!")
    .required("Last Name is a required field"),
});

const Step1 = () => {
  // Hooks
  const { setValues, data } = useData();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur", //onChange
    resolver: yupResolver(scheme),
  });

  console.log(errors);

  const onSubmit = (inputValues) => {
    history.push("./step2");
    setValues(inputValues);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName")}
          name="firstName"
          type="text"
          label="First Name"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register("lastName")}
          name="lastName"
          type="text"
          label="Last Name"
          error={!!errors.LastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton disableRipple>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step1;
