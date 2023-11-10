import React, { useState } from "react";

// Components
import Step1 from "./components/signUpStep1/SignUpStep1View";
import Step2 from "./components/signUpStep2/SignUpStep2View";

const SignUp = () => {
  // Use states
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="signUp">
      <div className="signUp-container">
        {currentStep === 1 ? (
          <Step1 setCurrentStep={setCurrentStep} currentStep={currentStep} />
        ) : (
          <Step2 setCurrentStep={setCurrentStep} currentStep={currentStep} />
        )}
      </div>
    </div>
  );
};

export default SignUp;
