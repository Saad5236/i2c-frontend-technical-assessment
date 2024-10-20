import React, { useState, useEffect, useContext } from "react";
import OrangeGlowBtn from "../../components/OrangeGlowBtn";
import { RegistrationContext } from "../../contexts/RegistrationContext.jsx";

function RegistrationForm() {
  const { saveRegistrationData } = useContext(RegistrationContext);
  const [formData, setFormData] = useState({
    username: "",
    companyName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Name field is required.";
    } else if (!/^[a-zA-Z]/.test(formData.username)) {
      newErrors.username = "Name must start with a letter.";
    } else if (formData.username.length < 3) {
      newErrors.username = "Name must be more than 3 characters.";
    }

    // company name is optional, but if it's entered then following two validations rules will be applied
    if (formData.companyName.trim()) {
      if (!/^[a-zA-Z]/.test(formData.companyName)) {
        newErrors.companyName = "Company Name must start with a letter.";
      } else if (formData.companyName.length < 4) {
        newErrors.companyName =
          "Company name must be at least 4 characters long.";
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email field is required.";
    } else if (
      !/^[a-zA-Z][a-zA-Z0-9._%+-]+@[a-zA-Z][a-zA-Z0-9-.]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address format.";
    }
    

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      saveRegistrationData(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="registration-form px-lg-5 px-3 py-lg-5 py-4 bg-white rounded-3">
      <form onSubmit={handleSubmit} noValidate={true}>
        <h2 className="text-black fw-800 mb-3">Registration</h2>
        <p className="mb-0 text-dark fw-medium mb-5 fs-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
          tristique senectus dui pharetra sit.
        </p>

        <div className="mb-3 registration-form-field">
          <label
            htmlFor="username"
            className="form-label fw-medium text-black mb-1 fs-14"
          >
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control fs-14"
            placeholder="Enter your name"
            id="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <div className="input-error-text fw-medium mt-2 text-danger">
              {errors.username}
            </div>
          )}
        </div>

        <div className="mb-3 registration-form-field">
          <label
            htmlFor="companyName"
            className="form-label fw-medium text-black mb-1 fs-14"
          >
            Company
          </label>
          <input
            type="text"
            className="form-control fs-14"
            placeholder="Enter your company name"
            id="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />

          {errors.companyName && (
            <div className="input-error-text fw-medium mt-2 text-danger">
              {errors.companyName}
            </div>
          )}
        </div>

        <div className="registration-form-field mb-5">
          <label
            htmlFor="email"
            className="form-label fw-medium text-black mb-1 fs-14"
          >
            Email address <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control fs-14"
            placeholder="Enter your email address"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="input-error-text fw-medium mt-2 text-danger">
              {errors.email}
            </div>
          )}
        </div>

        <OrangeGlowBtn btnType="submit" extraClasses={"w-100 fs-14"}>
          Register
        </OrangeGlowBtn>
      </form>
    </div>
  );
}

export default RegistrationForm;
