// Third-party imports
import React from "react";
import { Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Global imports
import MainContainer from "../../components/MainContainer/MainContainer";
import Form from "../../components/Form/Form";
import FileInput from "../../components/FileInput/FileInput";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useData } from "../../Context/DataContext";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Step3 = () => {
  // Hooks
  const history = useHistory();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (inputValue) => {
    history.push("/result");
    setValues(inputValue);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton disableRipple>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step3;
