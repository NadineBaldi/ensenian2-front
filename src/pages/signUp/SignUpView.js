import React, { useState } from "react";

// Components
import Step1 from "./components/signUpStep1/SignUpStep1View";
import Step2 from "./components/signUpStep2/SignUpStep2View";

const SignUp = () => {
  // Use states
  const [currentStep, setCurrentStep] = useState(1);

  // variable for textFields values
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    birthdate: "",
    dni: "",
    provinceSelected: "",
    city: "",
    domicile: "",
    registrationNumber: "",
    university: "",
  });

  // variable for handle error messages
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    birthdate: "",
    dni: "",
    provinceSelected: "",
    city: "",
    domicile: "",
    registrationNumber: "",
    university: "",
  });

  const handleFieldChange = (fieldName, value) => {
    setValues({
      ...values,
      [fieldName]: value,
    });

    // Clean message error
    setErrorMessages({
      ...errorMessages,
      [fieldName]: "",
    });
  };

  return (
    <div className="signUp">
      <div className="signUp-container">
        {currentStep === 1 ? (
          <Step1
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            values={values}
            setValues={setValues}
            errorMessages={errorMessages}
            setErrorMessages={setErrorMessages}
            handleFieldChange={handleFieldChange}
          />
        ) : (
          <Step2
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            values={values}
            setValues={setValues}
            errorMessages={errorMessages}
            setErrorMessages={setErrorMessages}
            handleFieldChange={handleFieldChange}
          />
        )}
      </div>
    </div>
  );
};

export default SignUp;
