// Third-party imports
import React from "react";
import { Typography, FormControlLabel, Checkbox } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

// Global imports
import MainContainer from "../../components/MainContainer/MainContainer";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useData } from "../../Context/DataContext";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }
  return phoneNumber.formatInternational();
};

const scheme = yup.object().shape({
  email: yup
    .string()
    .email("Email should have the correct format!")
    .required("Email is a required field"),
});

const Step2 = () => {
  // Hooks
  const { setValues, data } = useData();
  const history = useHistory();
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(scheme),
  });

  const hasPhone = watch("hasPhone");

  // console.log(hasPhone);
  // console.log("data en step 2", data);

  const onSubmit = (inputValue) => {
    history.push("/step3");
    setValues(inputValue);
  };

  return (
    <MainContainer>
      <Typography>🦄 Step 2</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          type="email"
          label="Email"
          name="email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        {/* <FormControlLabel
          control={
            <Checkbox
            {...register("hasPhone")}
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              color="primary"
              name="hasPhone"
            />
          }
          label="Do you have a phone?"
        /> */}
        <input type="checkbox" id="checkbox_id" {...register("hasPhone")} />
        <label>Do you have a phone?</label>

        {hasPhone && (
          <Input
            {...register("phoneNumber")}
            id="phomeNumber"
            type="tel"
            label="Phone Number"
            name="phoneNumber"
            required
            onChange={(e) =>
              (e.target.value = normalizePhoneNumber(e.target.value))
            }
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step2;
