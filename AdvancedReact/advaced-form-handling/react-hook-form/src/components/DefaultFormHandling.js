import React from "react";
import { useForm } from "react-hook-form";

function DefaultValuesForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      personalInfo: {
        fullName: "John Doe",
        email: "johndoe@gmail.com"
      },
      address: {
        street: "123 Elm St",
        city: "New York",
        postalCode: "10001"
      }
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Group 1: Personal Information */}
      <fieldset>
        <legend>Personal Information</legend>
        <label>Full Name:</label>
        <input
          {...register("personalInfo.fullName", { required: "Full name is required" })}
        />
        {errors.personalInfo?.fullName && (
          <p style={{ color: "red" }}>{errors.personalInfo.fullName.message}</p>
        )}
        <br />
        <label>Email Address:</label>
        <input
          type="email"
          {...register("personalInfo.email", { required: "Email is required" })}
        />
        {errors.personalInfo?.email && (
          <p style={{ color: "red" }}>{errors.personalInfo.email.message}</p>
        )}
      </fieldset>

      {/* Group 2: Address Details */}
      <fieldset>
        <legend>Address Details</legend>
        <label>Street Address:</label>
        <input
          {...register("address.street", { required: "Street address is required" })}
        />
        {errors.address?.street && (
          <p style={{ color: "red" }}>{errors.address.street.message}</p>
        )}
        <br />
        <label>City:</label>
        <input
          {...register("address.city", { required: "City is required" })}
        />
        {errors.address?.city && (
          <p style={{ color: "red" }}>{errors.address.city.message}</p>
        )}
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}

export default DefaultValuesForm;
