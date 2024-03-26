"use client";
import React, { useState } from "react";
import FormProfileType from "@/components/FormSignUp/FormProfileType";
import FormCompany from "@/components/FormSignUp/FormCompany";
import FormEmail from "@/components/FormSignUp/FormEmail";
import FormPassword from "@/components/FormSignUp/FormPassword";
import FormSocialLink from "@/components/FormSignUp/FormSocialLink";
import FormClub from "@/components/FormSignUp/FormClub";

const SignUp = () => {
    const [activeStep, setActiveStep] = useState<number>(1);
  return (
    <main>
      <div hidden={activeStep != 1}>
        <FormProfileType setActiveStep={setActiveStep} />
      </div>
      <div hidden={activeStep != 2}>
        <FormCompany setActiveStep={setActiveStep} />
      </div>
      <div hidden={activeStep != 3}>
        <FormEmail setActiveStep={setActiveStep} />
      </div>
      <div hidden={activeStep != 4}>
        <FormPassword setActiveStep={setActiveStep} />
      </div>
      <div hidden={activeStep != 5}>
        <FormSocialLink setActiveStep={setActiveStep} />
      </div>
      <div hidden={activeStep != 6}>
        <FormClub setActiveStep={setActiveStep} />
      </div>
    </main>
  );
};

export default SignUp;
